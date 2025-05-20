import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Permission } from "./Permission";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id;

    @Column({ unique: true })
    name;

    @ManyToMany(() => Permission, (permission) => permission.roles)
    permissions;
}
