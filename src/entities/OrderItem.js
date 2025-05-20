import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class OrderItem extends BaseEntity {
    @PrimaryGeneratedColumn()
    id;

    @ManyToOne(() => Order, (order) => order.items)
    order;

    @ManyToOne(() => Product, (product) => product.orderItems)
    product;

    @Column()
    quantity;

    @Column("float")
    unitPrice;

    @Column("float", { nullable: true })
    discountPercent;

    @Column("float")
    priceBeforeTax;

    @Column("float")
    priceAfterTax;

    @Column("float")
    taxRate;

    @Column({ nullable: true })
    taxType;

    @Column()
    productName;

    @Column({ nullable: true })
    productImageUrl;

    @Column({ nullable: true })
    productSlug;

    @Column({ nullable: true })
    productUnit;
}
