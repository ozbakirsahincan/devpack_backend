import { BaseEntity } from "./BaseEntity";
import { Entity, ManyToOne, Column } from "typeorm";
import { Product } from "./Product";

@Entity()
export class WishlistItem extends BaseEntity {
    @ManyToOne(() => Product, (product) => product.wishlistItems)
    product;

    @Column()
    kundeId;

    @Column()
    kundeType;
}