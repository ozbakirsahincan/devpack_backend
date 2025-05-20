import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Product } from "./Product";

@Entity()
export class TaxType extends BaseEntity {
    @Column()
    name;

    @Column({ unique: true })
    code;

    @Column("float")
    rate;

    @Column({ default: true })
    isActive;

    @OneToMany(() => Product, (product) => product.taxType)
    products;
}