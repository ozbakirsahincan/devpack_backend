import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AppDataSource } from "../../config/db/data-source.js";
import { User } from "../entities/User";

export async function login(req, res) {
    const { username, password } = req.body;

    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { username }, relations: ["roles"] });

    if (!user) {
        return res.status(401).json({ message: "Invalid username or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
        { id: user.id, roles: user.roles.map((role) => role.name) },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({ token });
}

export async function register(req, res) {
    const { username, password, roles } = req.body;

    const userRepository = AppDataSource.getRepository(User);
    const existingUser = await userRepository.findOne({ where: { username } });

    if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = userRepository.create({
        username,
        password: hashedPassword,
        roles,
    });

    await userRepository.save(newUser);

    res.status(201).json({ message: "User registered successfully" });
}
