import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { CartItem } from "./CartItem";
import { GeschaftKunde } from "./GeschaftKunde";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class Cart extends BaseEntity {
    @PrimaryGeneratedColumn()
    id;

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    createdAt;

    @Column({ type: "datetime", onUpdate: "CURRENT_TIMESTAMP", default: () => "CURRENT_TIMESTAMP" })
    updatedAt;

    @Column({ default: false })
    isConverted;

    @Column()
    kundeId;

    @Column()
    kundeType;

    @OneToMany(() => CartItem, (cartItem) => cartItem.cart)
    cartItems;

    @ManyToOne(() => GeschaftKunde, (geschaftKunde) => geschaftKunde.carts, { nullable: true })
    geschaftKunde;
}
