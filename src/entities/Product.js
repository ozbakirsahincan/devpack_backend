import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { TaxType } from "./TaxType";
import { ProductSupplier } from "./ProductSupplier";
import { Category } from "./Category";
import { OrderItem } from "./OrderItem";
import { CartItem } from "./CartItem";
import { WishlistItem } from "./WishlistItem";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class Product extends BaseEntity {
    @Column()
    name;

    @Column({ unique: true })
    slug;

    @Column({ nullable: true })
    description;

    @Column("float")
    priceNet;

    @Column("float")
    priceGross;

    @Column({ default: false })
    isOnHomepage;

    @Column({ default: false })
    isOffer;

    @Column()
    stockAmount;

    @Column({ unique: true })
    stockCode;

    @Column({ nullable: true })
    expiryDate;

    @Column({ nullable: true })
    companyName;

    @Column({ nullable: true })
    stars;

    @Column({ nullable: true })
    imageUrl;

    @Column({ nullable: true })
    thumbnailUrl;

    @Column({ nullable: true })
    barcode;

    @Column({ nullable: true })
    unit;

    @ManyToOne(() => TaxType, (taxType) => taxType.products, { nullable: true })
    taxType;

    @ManyToOne(() => ProductSupplier, (supplier) => supplier.products, { nullable: true })
    supplier;

    @OneToMany(() => Category, (category) => category.products)
    categories;

    @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
    orderItems;

    @OneToMany(() => CartItem, (cartItem) => cartItem.product)
    cartItems;

    @OneToMany(() => WishlistItem, (wishlistItem) => wishlistItem.product)
    wishlistItems;
}
