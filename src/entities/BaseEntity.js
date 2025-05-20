import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column } from "typeorm";

export class BaseEntity {
  @PrimaryGeneratedColumn()
  id;

  @CreateDateColumn()
  createdAt;

  @UpdateDateColumn()
  updatedAt;

  @Column({ nullable: true })
  deletedAt;

  @Column({ default: false })
  isDeleted;

  @Column({ default: true })
  isActive;
}
