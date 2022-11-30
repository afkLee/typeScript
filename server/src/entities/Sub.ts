// import { extname } from "path";
// import { BaseEntity, Column, Entity, Index, JoinColumn, OneToMany } from "typeorm";
// import User from "./User";
// import {Expose} from 'class-transformer';


// @Entity("subs")
// export default class Sub extends BaseEntity{
//     @Index()
//     @Column({ unique : true})
//     name: string;


//     @Column()
//     title: string;



//     @Column({type: "text", nullable:true})
//     description: string;

//     @Column({nullable:true})
//     imageUrn: string;

//     @Column({nullable: true})
//     bannerUrn: string;

//     @Column()
//     username:string;
    
//     //JoinColumn 의 경우 어떤 관계에 Foreign Key 가졌는지 알려줌
//     //JoinColumn 사용시 propertyName + referencedColumnName 이름의 열 자동 생성
//     //@ManyToOne의 경우 선택, @OneToOne은 필수
//     //Foreign Key 참조 테이블 에서의 key 참조 하는 측 관계 변수는 참조되는 측의 테이블 키를 가르킴
//     //참조하는 테이블 속성 행 1개의 값은 참조되는 테이블 행 값에 대응
//     //name > 외래 키 속성명 / 없으면 propertyName + referencedColumnName
//     //referencedColumnName > 참조 Entity 의 참조 속성명 없으면 id 값

//     @ManyToOne(() => User) //User 테이블 참조함 username이 외래키 속성명
//     @JoinColumn({name:"username", referencedColumnName: "username"})
//     user: User;


//     @OneToMany(() => Post , (post) => post.sub)
//     post : Post[]


//     @Expose()
//     get imageUrl(): string{
//         return this.imageUrn
//         ? `${process.env.APP_URL}/image/${this.imageUrn}`
//         : "https://www.gravatar.com/avatar?d=mp&f=y"
//     }

//     @Expose()
//     get bannerUrl(): string | undefined{
//         return this.imageUrn
//         ? `${process.env.APP_URL}/image/${this.bannerUrn}`
//         : "https://www.gravatar.com/avatar?d=mp&f=y"
//     }



// }