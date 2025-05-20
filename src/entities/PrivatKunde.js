import { BaseEntity } from "./BaseEntity";
import { Entity, Column } from "typeorm";

@Entity()
export class PrivatKunde extends BaseEntity {
    @Column()
    firstName;

    @Column()
    lastName;

    @Column({ unique: true })
    email;

    @Column()
    password;

    @Column({ nullable: true })
    phone;

    @Column({ nullable: true })
    birthDate;

    @Column({ nullable: true })
    gender;

    @Column({ nullable: true })
    notes;
}