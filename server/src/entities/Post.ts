import { extname } from "path";
import {  BeforeInsert, Column, Entity, Index, JoinColumn, OneToMany } from "typeorm";
import User from "./User";
import {Expose} from 'class-transformer';
import Sub from "./Sub";
import BaseEntity from './Entity';


@Entity("posts")
export default class Post extends BaseEntity{
    @Index()
    @Column({ unique : true})
    identifier: string;


    @Column()
    subName: string;

    @Column()
    username: string;
    @Column()
    title: string;


    //Slug 란? 페이지,포스트 설명하는 핵심단어 를 뜻함
    //제목에 조사,전치사,쉼표,마침표 등 뺴고 띄어쓰기는 하이픈으로 대체하여 작성
    @Column()
    slug : string;
    
    @ManyToOne(() => User, (user: { posts: any; }) => user.posts) 
    @JoinColumn({name:"username", referencedColumnName: "username"})
    user: User;

    @ManyToOne(() => Sub, (sub: { posts: any; }) => sub.posts) 
    @JoinColumn({name:"subName", referencedColumnName: "username"})
    user: Sub;



    @Exclude()
    @OneToMany(() => Comment,(comment) => comment.post)
    comments: Comment[];

    @Exclude()
    @OneToMany(() => Vote,(vote) => vote.post)
    votes: Vote[];


    
    @Expose() get url(): string{
        return `/r/${this.subName}/${this.identifier}/${this.slug}`;
    }

    @Expose() get commentCount(): number{
        return this.comments.length;
    }

    @Expose() get voteScore(): number{
        return this.votes?.reduce((memo ,curt) => memo + (curt.value || 0) , 0);
    }

    protected userVote: number;

    set UserVote(user:User){
        const index = this.votes.findIndex((v) => v.username === user.username);
        this.userVote = index > -1 ? this.votes[index].value :0;
    }

    @BeforeInsert()
    makeIdAndSlug(){
        this.identifier = makeId(7);
        this.slug = slugify(this.title);

    }


}