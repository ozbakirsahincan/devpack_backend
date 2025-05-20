import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Role } from "./Role";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id;

    @Column({ unique: true })
    username;

    @Column()
    password;

    @Column({ default: true })
    isActive;

    @ManyToMany(() => Role)
    @JoinTable()
    roles;
}
