import { Entity, Column } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class Address extends BaseEntity {
    @Column()
    kundeId;

    @Column({
        type: "enum",
        enum: ["PRIVAT", "GESCHAEFT", "INDIVIDUAL"],
    })
    kundeType;

    @Column({ nullable: true })
    title;

    @Column()
    street;

    @Column()
    postalCode;

    @Column()
    city;

    @Column()
    country;

    @Column({ nullable: true })
    companyName;

    @Column({ nullable: true })
    taxNumber;

    @Column({ nullable: true })
    phone;

    @Column({ nullable: true })
    notes;

    @Column({
        type: "enum",
        enum: ["PERSONAL", "DELIVERY", "BILLING"],
    })
    type;
}