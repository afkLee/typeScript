# typeScript

타입 스크립트 기반 Next.js / Node.js

TypeScript란 JavaScript의 상위 집합이라 보면 된다.

JavaScript 의 Type이 정의된 개념으로 보면 편하다.

Next.js 
React 를 server side rendering 쉽게 구현해줌 리액트로 개발시 Single Page Applicatioon 이용해 Client Side Rendering 을 하기에 검색엔진 최적화에 안좋음

Client Side Rendering 하면 첫페이지에 빈 HTML 가져와 JS 파일 해석, 화면 구성하기에 포털 검색 노출 거의없음

Next.Js로 구성시 Pre-Rendering 통해 페이지 미리 렌더링 , 완성된 HTML 가져오기에 검색엔진 크롤러 에게 Rendering 된 페이지를 전달

# JavaScript Reduce()
reduce Method

예시
```
const array1 = [1,2,3,4];

//0~4까지 다 더하는경우
const initialValue =0;
const sum = array1.reduce((previousValue,currentValue) => previousValue + currentValue , initialValue);

console.log(sumWithInitial);
// 10 출력
```
1. 처음 initialValue => 0이니 previousValue 0이며 currentValue는 1 임 // 0+1 => 1
2. previousValue 는 1이며 currentValue는 2 // 1+2 => 3
3. previousValue 는 3이며 currentValue는 3 // 3+3 => 6
4. previousValue 는 6이며 currentValue는 4 // 6+4 => 10

결과는 10




# TypeORM
https://typeorm.io/

TypeORM 이란? node.js 에서 실행되며 TypeScript로 작성되는 객체 관계형 매퍼 라이브러리 

ORM(Object Relational Mapping) 이란?
객체,관계형 데이터베이스의 데이터를 자동으로 변형,연결 해주는 작업


Java Script 랑의 차이점

TypeORM
```
const boards = Board.find({title:'Hello',status :'PUBLIC'})
```

JavaScript

```
db.query('SELECT * FROM boards WHERE title ="Hello" AND status = "PUBLIC", (err,result) => {
    if(err){
        throw new Error('Error')
    }
    boards = result.rows;
})
```
특징 / 이점
모델 기반, Database 테이블 체계 자동생성
Database 개체 쉽게 삽입,업데이터,삭제 가능
table 간의 Mapping(일대일,다대다,일대다) 만듬
간단한 CLI명령 제공


# Class Transformer

Class Transformer 사용시 plain object를 class object로 변환가능, 그 반대 또한 가능


plain object 
```
{
    "id" : 1,
    "firstName" : "Lee",
    "lastName" : "EungJae",
    "age" : 25
}
```


class object

```
import {Expose} from 'class-transformer';

export class User{
    id: number;
    firstName : string;
    lastname : string;
    age : number;
    
    @Expose()
    getName(){
        return this.firstName + this.lastName;
    }
    
    @Expose()
    getAge(){
        return this.age;
    }
}
```

class-transform 없을경우
```
fetch('users.json').then((users: User[]) => {
    return users.map(u => to FullName(u));
})

export function toFullName(user){
    return `${user.firstName}${user.lastName}`
}
```
함수를 만들어 map method 사용하여서 구현을 해야함


class-transform 사용할경우
```
fetch('users.json').then((users: Object[]) => {
    const realUsers = plainToInstance(User, users);

    return realUsers.map(u => u.getName());
})
```
plainToInstance : class-transform 의 method , class에서 정의한 로직 이용 가능 


왜 사용 하는가?

User 클래스에서 정의한 로직 그대로 사용 / 상태와 행위가 함께 이루어지는 코드


# == 이랑 ===의 차이

==를 사용하면 연산이 되기 전에 피연산자들을 먼저 비교할 수 있는 형태로 변환을 시키지만 ===은 형변환 x

254 == '254'                // return true
true == 1                   // return true
undefined == null           // return true

254 === '254'               // return false
true === 1                  // return false
undefined === null          // return false


# JS 와 TS 차이점
https://choseongho93.tistory.com/319

