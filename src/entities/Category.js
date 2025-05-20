import { Entity, Column, OneToMany } from "typeorm";
import { Product } from "./Product";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class Category extends BaseEntity {
    @Column()
    name;

    @Column({ nullable: true })
    description;

    @Column({ unique: true })
    slug;

    @Column({ nullable: true })
    imageUrl;

    @OneToMany(() => Product, (product) => product.categories)
    products;
}