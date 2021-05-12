// 타입스크립트 인터페이스!

// let user: object;

// user = {
//     name: 'xx',
//     age: 30
// }

// console.log(user.name); // object 에는 특정 속성값에 대한 정보가 없어서 에러가 뜬다


// 프로퍼티를 정의해서 객체를 표현하고자 할 때 interface를 사용

interface User {
    name: string,
    age: number
    gender? : string // 이렇게 ? 를 붙여주면 있어도 되고 없어도 되는 프로퍼티로 사용가능
    // gender : string // 인터페이스 안에 gender를 선언하고 사용해야한다
}

let user: User = {
    name: 'xx',
    age: 30,
    // gender : 'female'
}

user.age = 10;// 재선언시 문제없음
user.gender = "male" // 새로운값 넣을 시 문제 

console.log(user.age, user.name);