import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export class User {
    @Column({type: 'varchar', length: 100, nullable: false})
    username: string;

    @Column({type: 'varchar', length: 100, nullable: false})
    email: string;

    @Column({type: 'varchar', length: 20, nullable: false})
    password: string;

    @Column({type: 'varchar', length: 100, nullable: true})
    name: string;

    @Column({type: 'varchar', length: 100, nullable: true})
    surname: string;

    @Column({type: 'int', nullable: true})
    age: number;

    @Column({type: 'varchar', length: 20, nullable: true})
    city: string;

    @Column({type: 'varchar', length: 200, nullable: true})
    userImg?: string;

    @Column({type: 'text', nullable: true})
    bio?: string;

    @PrimaryGeneratedColumn()
    id?: number;

    @CreateDateColumn({ nullable: true})
    createdAt: Date

    @CreateDateColumn({ nullable: true})
    updatedAt: Date
}