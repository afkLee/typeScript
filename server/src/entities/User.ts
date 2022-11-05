import { BaseEntity, BeforeInsert, Column, Entity, In,Index, OneToMany } from "typeorm";
import {IsEmail, Length} from "class-validator";
import bcrypt from 'bcryptjs';

//User 클래스가 Entity임을 나태내는 용도 
//Database에서 CREATE TABLE user 에 해당함
@Entity("users")
export default class User extends BaseEntity{
    //Database Index 생성함, Entity에 사용할경우 복합 열로 Index 생성가능
    //Database Index 생성 이유 : Search 할때 더 빠르게 찾기위해 정렬 하는 역할
    //모든 데이터 조회 x 데이터 파일의 중간에서 Search 
    @Index()
    @IsEmail(undefined,{message: "이메일이 잘못되었네요"})
    @Length(1,50 ,{message:"이메일 을 입력해주세요"})
    //Column > Database에서 열을 나타낼때 사용함 ex) email,username 등
    //unique 는 이메일이 하나여야만 하니깐 true, 같은 이메일로 여러개 가능하다면 false
    @Column({ unique: true})
    email: string;
    

    @Index()
    @Length(2,20,{message:"이름은 2글자 이상으로 만들어주세요"})
    @Column({unique : true})
    username: string;

    @Exclude()
    @Column()
    @Length(6,30,{ massage : "비밀번호는 6자리 이상이여야합니다."})
    password: string;


    @OneToMany(() =>Post,(post) => post.user)
    posts: Post[];

    @OneToMany(() =>Vote,(vote) => vote.user)
    posts: Vote[];

    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password, 6)
    }





}