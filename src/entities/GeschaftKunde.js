import { Entity, Column } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class GeschaftKunde extends BaseEntity {
    @Column()
    companyName;

    @Column()
    taxNumber;

    @Column({ nullable: true })
    industry;

    @Column({ nullable: true })
    contactPerson;

    @Column({ unique: true })
    email;

    @Column({ nullable: true })
    phone;

    @Column({ nullable: true })
    password;

    @Column({ nullable: true })
    notes;
}