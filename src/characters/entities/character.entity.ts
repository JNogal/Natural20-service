import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Character')
export class Character {

    @PrimaryGeneratedColumn()
    characterId?: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    class: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    race: string;
    
    @Column({ type: 'int', nullable: false })
    age: number;

    @Column({ type: 'text', nullable: false, default: '' })
    description: string;

    @Column({ type: 'int', nullable: false, default: 0 })
    strength: number;

    @Column({ type: 'int', nullable: false, default: 0})
    dexterity: number;

    @Column({ type: 'int', nullable: false, default: 0})
    constitution: number;

    @Column({ type: 'int', nullable: false, default: 0})
    intelligence: number;

    @Column({ type: 'int', nullable: false, default: 0})
    charisma: number;

    @Column({ type: 'int', nullable: false, default: 0})
    wisdom: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    userId: number;

    @Column({ type: 'simple-array', nullable: true })
    abbilities: string[];

    @Column({ type: 'varchar', length: 100, nullable: true })
    subclass?: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    alias?: string;

    @Column({ type: 'text', nullable: true })
    characterImg?: string;

    @Column({ type: 'text',  nullable: true })
    characterAvatar?: string;

    @CreateDateColumn({ nullable: true })
    createdAt?: Date

    @CreateDateColumn({ nullable: true })
    updatedAt?: Date
}