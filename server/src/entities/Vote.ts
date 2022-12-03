import { extname } from "path";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import User from "./User";
import {Expose} from 'class-transformer';
import Post from "./Post";

import BaseEntity from './Entity';

@Entity("votes")
export default class Vote extends BaseEntity{
    @Column()
    value: number;

    @ManyToOne(() => User)
    @JoinColumn({name: "username",referencedColumnName:"username"})
    user: User;



    @Column()
    username: string;

    @Column({nullable:true})
    postId: string;
    
    @ManyToOne(() => Post)
    post:Post;

    @Column({nullable:true})
    commentId: number;

    @ManyToOne(() => Comment)
    comment: Comment;



}