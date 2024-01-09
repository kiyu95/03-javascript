// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(값이 존재함[참으로 평가되는 값]) 
// 또는 Falsy 값(값지 존재하지 않음[거짓으로 평가되는 값])으로 구분한다.
// Truthy -> true, Falsy -> false로 암묵적 타입 변환 된다.

let test1;
console.log(!test1); // test값 없기 때문에 Falsy이고, !test는 true 가 된다.
console.log(!!test1); // !test는 true이고, !!test는 Falsy 가 된다.

let test = {
    a : null,
    b : 1,
    fun() {
        console.log("dfdfdf");
    }
};

if(test?.a){ // test?.a : a의 값이 Truthy 인가?
    console.log("true");
} else {
    console.log("false");
}

// console.log(test.a && "a"); // tset라는 객체의 프로퍼티 a의 값이 존재하지 않으므로 null 출력
console.log(test.b && "a"); // test라는 객체의 프로퍼티 b에 값이 존재하는 경우 a출력 아닐경우 null 출력
test.b ? console.log("true") : console.log("false"); // test.b 가 참인가? 거짓인가?

console.log("==========");

test.fun();
test?.fun();
