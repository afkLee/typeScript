import { Data } from "@google-cloud/logging/build/src/entry";
import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export default abstract class Entity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Data;

    @UpdateDateColumn()
    updatedAt: Data;
}