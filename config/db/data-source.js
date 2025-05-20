import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from '../../src/entities/User';

dotenv.config();

const { ProductSubscriber } = require("../../src/subscribers/ProductSubscriber");

export const AppDataSource = new DataSource({
    type: "mariadb",
    url: process.env.DATABASE_URL,
    synchronize: true, // Set to false in production
    logging: true,
    entities: ["src/entities/**/*.js", User],
    migrations: ["src/migrations/**/*.js"],
    subscribers: [ProductSubscriber],
});
