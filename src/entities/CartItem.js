import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Cart } from "./Cart";
import { Product } from "./Product";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class CartItem extends BaseEntity {
    @PrimaryGeneratedColumn()
    id;

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    createdAt;

    @Column({ type: "datetime", onUpdate: "CURRENT_TIMESTAMP", default: () => "CURRENT_TIMESTAMP" })
    updatedAt;

    @ManyToOne(() => Cart, (cart) => cart.cartItems)
    cart;

    @ManyToOne(() => Product, (product) => product.cartItems)
    product;

    @Column({ default: 1 })
    quantity;

    @Column()
    kundeId;

    @Column()
    kundeType;
}
