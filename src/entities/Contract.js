import { Entity, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { GeschaftKunde } from "./GeschaftKunde";

@Entity()
export class Contract extends BaseEntity {
    @ManyToOne(() => GeschaftKunde, (geschaftKunde) => geschaftKunde.contracts)
    geschaftKunde;

    @Column()
    title;

    @Column()
    startDate;

    @Column({ nullable: true })
    endDate;

    @Column({ nullable: true })
    contractFileUrl;

    @Column({ nullable: true })
    terms;

    @Column()
    status;
}