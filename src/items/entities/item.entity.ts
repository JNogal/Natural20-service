import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Item')
export class Item {
    @PrimaryGeneratedColumn()
    itemId?: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    type: string;

    @Column({ type: 'text', nullable: false, default: '' })
    description: string;

    @Column({ type: 'int', nullable: true })
    weight: number;

    @Column({ type: 'int', nullable: true })
    quantity: number;

    @Column({ type: 'int', nullable: true })
    price: number;

    @Column({type: 'int', nullable: false})
    characterId: number;

    @Column({ type: 'int', nullable: true })
    durability?: number;

    @Column({ type: 'int', nullable: true })
    uses?: number;

    @Column({ type: 'int', nullable: true })
    totalWeight?: number;

    @Column({ type: 'text', nullable: true })
    itemImg?: string;

    @CreateDateColumn({ nullable: true })
    createdAt?: Date

    @CreateDateColumn({ nullable: true })
    updatedAt?: Date
}