# typeScript

타입 스크립트 기반 Next.js / Node.js

TypeScript란 JavaScript의 상위 집합이라 보면 된다.

JavaScript 의 Type이 정의된 개념으로 보면 편하다.

Next.js 
React 를 server side rendering 쉽게 구현해줌 리액트로 개발시 Single Page Applicatioon 이용해 Client Side Rendering 을 하기에 검색엔진 최적화에 안좋음

Client Side Rendering 하면 첫페이지에 빈 HTML 가져와 JS 파일 해석, 화면 구성하기에 포털 검색 노출 거의없음

Next.Js로 구성시 Pre-Rendering 통해 페이지 미리 렌더링 , 완성된 HTML 가져오기에 검색엔진 크롤러 에게 Rendering 된 페이지를 전달




# TypeORM
https://typeorm.io/

TypeORM 이란? node.js 에서 실행되며 TypeScript로 작성되는 객체 관계형 매퍼 라이브러리 

ORM(Object Relational Mapping) 이란?
객체,관계형 데이터베이스의 데이터를 자동으로 변형,연결 해주는 작업


Java Script 랑의 차이점

TypeORM

const boards = Board.find({title:'Hello',status :'PUBLIC'})

JavaScript

db.query('SELECT * FROM boards WHERE title ="Hello" AND status = "PUBLIC", (err,result) => {
    if(err){
        throw new Error('Error')
    }
    boards = result.rows;
})

특징 / 이점
모델 기반, Database 테이블 체계 자동생성
Database 개체 쉽게 삽입,업데이터,삭제 가능
table 간의 Mapping(일대일,다대다,일대다) 만듬
간단한 CLI명령 제공




# JS 와 TS 차이점
https://choseongho93.tistory.com/319

