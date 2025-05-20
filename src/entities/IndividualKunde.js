import { Entity, Column } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class IndividualKunde extends BaseEntity {
    @Column()
    name;

    @Column({ nullable: true })
    phone;

    @Column({ nullable: true })
    email;

    @Column({ nullable: true })
    notes;
}