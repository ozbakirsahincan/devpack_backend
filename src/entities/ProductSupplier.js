import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Product } from "./Product";

@Entity()
export class ProductSupplier extends BaseEntity {
    @Column()
    type;

    @Column()
    kundeId;

    @Column({
        type: "enum",
        enum: ["PRIVAT", "GESCHAEFT", "INDIVIDUAL"],
    })
    kundeType;

    @Column({ nullable: true })
    contactInfo;

    @Column({ nullable: true })
    notes;

    @OneToMany(() => Product, (product) => product.supplier)
    products;
}