import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Role } from "./Role";

@Entity()
export class Permission {
    @PrimaryGeneratedColumn()
    id;

    @Column({ unique: true })
    name;

    @ManyToMany(() => Role, (role) => role.permissions)
    roles;
}
