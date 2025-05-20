import { Entity, Column, OneToMany, ManyToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { OrderItem } from "./OrderItem";
import { PrivatKunde } from "./PrivatKunde";
import { GeschaftKunde } from "./GeschaftKunde";
import { IndividualKunde } from "./IndividualKunde";

@Entity()
export class Order extends BaseEntity {
    @Column()
    kundeId;

    @Column()
    kundeType;

    @Column("float")
    totalAmount;

    @Column({ nullable: true })
    discountCode;

    @Column("float", { nullable: true })
    discountValue;

    @Column("float")
    finalAmount;

    @Column()
    status;

    @Column({ nullable: true })
    paymentMethod;

    @Column({ default: false })
    paid;

    @Column({ nullable: true })
    notes;

    @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
    items;

    @ManyToOne(() => PrivatKunde, (kunde) => kunde.orders, { nullable: true })
    privatKunde;

    @ManyToOne(() => GeschaftKunde, (kunde) => kunde.orders, { nullable: true })
    geschaftKunde;

    @ManyToOne(() => IndividualKunde, (kunde) => kunde.orders, { nullable: true })
    individualKunde;
}
