/*
변수: 데이터를 담아 놓기 위해 이름표를 붙여놓는 공간
*/
// 변수 선언
//var num;
// 변수 초기화
//num = 10;
// 변수 선언 + 초기화
var num = 10;
num = 20;
console.log(num);

// 사용할 수 없는 변수명
//var 4you

//예약어: 프로그래밍 언어 자체적으로
// 사용할 단어 혹은 키워드 => 변수x


//변수명 (식별자)
//1. camel case
// var_sendEmailDate
//2. Snake Case
// var_send_email


// 주석(comments)
// 1. 싱글라인 //
/* 
    2. 멀티라인 주석
    2. 멀티라인 주석
*/

/*
자료형

1. 기본형, 단순형, 원시형
- number
- string
- boolean
- undefined
- null
- symbol
2. 참조형, 객체(Object)

*/

// number
// 정수(int), 실수(float) 구분이 없음
var price = 10000;
console.log(price);

//string
var myname = "테킷";
console.log(myname);

//boolean
var isTrue = true;
console.log(isTrue);

// undefined
var a;
console.log(a);

/*
 2. 객체(object)
 - 속성의 모음으로 이루어진 데이터
 - 속성에는 어떤 데이터 타입이라도 사용 가능
 - 속성의 구분,
 - 속성의 정의는 속성명: 속성값

*/
var student = {
    grade: 1,
    school: "lion school"
}

console.log(student);
typeof(student);


// 객체의 값 호출
var gradeInfo = student.grade
console.log(gradeInfo);

// 객체의 키 호출
var key = object.keys(student)[0];
console.log(key);

//객체에 속성 추가 
student.class = 3;
console.log(student);
console.log(student['class']);

// 비어 있는 객체
var teacher = new Object();
var teacher = {

};

var name1 = "KIM";
var name2 = "kim";

console.log(name1==name2);

// 다른 값 나옴 
var name3=Symbol("이테킷");
var name4=Symbol("이테킷");
console.log(name3 == name4);

/* 

    1. 연산자
    1개의 표현식에 대한 산술, 대입, 논리 타입 등을 평가하여 
    값을 생성하는 작업

*/

//1. 산술 연산자

var a= 10;
var b = 3;

console.log(a+b);

var c = 7;
console.log(++c); 
// output = 8
console.log(--c);
//output = 6

console.log( c += 3);

// 2. 비교연산자

console.log(2==2);
console.log(2=="2");
console.log(2==="2");
console.log(2!=2);
console.log(4>2);


// 3. 논리 연산자

// 논리합(or)
// 피연산자 중에 하나라도 참이면 참 
true || true
// 논리곱 (and)
// 피연산자 모두가 참이어야 참
console.log(true&&true);
console.log(true&&false);
console.log(2>3 || 5 == 5);

// 부정(not)
// 피연산자의 boolean 값을 부정
console.log(!true);
console.log(!(5>4));

//5. type of 연산자
console.log(typeof 1);
console.log(typeof "1");
console.log(typeof true);
console.log(typeof null);

// 문자열 선언
var greering = "Hello";
var farewell = 'Bye!'+1;
var myname = 'Hyoungwoo Kim'

var sentence = greeting + '\n' + myname;
console.log(sentence);

// 이스케이프 시퀀스
var sentence = greeting + '\t' + myname;
// \n , \', \"
// 템플릿 리터럴
var a = '안녕하세요!
여러분 :)';

var price = 1000;
var b = '이 물건은' + price + '원 입니다.'
console.log(b);
var c = '이 물건은 ${price}원 입니다'
console.log(c);
var d ='이 물건은 ${200+450}원 입니다'

// 문자열 함수

var abc = "I am Iron man";

// indexof 
abc.indexOf("man") 
//output = 문자열 갯수 10개 

//slice
// 문자열의 일부를 잘라낼 떄
console.log(abc.slice(0,3));
console.log(abc.slice(0,4));
// toupperCase (), toLowercase()

// startswith()
var efg = 'This is my car.';
efg.startsWith('Th')
// output = True or False
efg.endsWith('car.')

//includes()
console.log(efg.includes('is'));

/*
배열(array)
복수의 데이터를 담고 있는 자료구조
배열의 순서는 0부터
배열은 객체
키 => 인덱스, 값 => 요소
*/

var mbti = ['INFP','ENFJ','INTJ']
console.log(mbti[0]);
console.log(mbti.length);

mbti[3] = 'ESFP';
console.log(mbti[3]);

// push() 원본 배열 변경
mbti.push('ESFP', 'ISTJ');

//스프레드 문법
var newMbti = [.. mbti, 'ESFP', 'ISTJ']
console.log(mbti);
console.log(newMbti);

// pop() 제거 
console.log(mbti.pop());

// unshift 앞쪽에 추가

// shift 앞쪽 요소 제거 

var mbti = ['INFP', 'ENFJ', 'INTJ']

// slice()
console.log(mbti.slice(0,2));

// join() 문자열로 변환 출력 중간 - 넣어서 출력
console.log(mbti.join());
console.log(mbti.join('-'));

// sort()
console.log(mbti.sort());

//reverse()
console.log(mbti.sort().reverse());

/* 제어문 (control flow)
1. 조건문
2.반복문
*/
var a=2

if (a>2) {
    console.log('a>2');    
} else if (a ==2) {
    console.log('a=2');
} else if (a ==0) {
    console.log('a=0');   
} else{
    console.log('a<=2');    
}

// 3. switch if 랑 다르게 break 하지 않으면 계속 진행
var mbti = 'INFP'
switch (mbti) {
    case 'INFP':
        val = 'INFP';
        break;
    case 'ENFP':
        val = 'ENFP';
        break;
    case 'ISTJ':
        var ='ISTJ';
        break;
    default: val ='유효한 값이 아닙니다'
}

//반복문(loop)

//1. for

for(var i =0; i<10; i++) {
    for (var j=0; j<10; j++){
        console.log('${i}-${j}');
               
    }
}

for (var i = 10; i > 0; i--){
    console.log(i);
    
}

// 2. while
var flag =10;
while (flag>0) {
    console.log(flag); 
    flag--;
}

// do.. while 일단 무조건 한번 수행
var flag =10;

do{
    console.log(flag);
} while (flag > 10)

/**
 * 예외(에러) 처리
 */

try {
    // 에러가 발생할 가능성 있는 코드
    //myfunc();
    new Error("에러")
} catch(error){
    // 에러가 발생했을 때 실행되는 코드
    console.log("에러발생");
    console.log(error);
    
} finally{
    // 에러 방생여부와 상관없이 무조건 실행
    console.log("무조건 실행");
    
}
/**
 * 함수 (functions)
 */


function multiply(a,b) {
    return a*b;
}

console.log(multiply(10,5));

var multiply = function (a,b) {
    return a*b;
};

console.log(multiply(10,5));

var a=10;

while (true) {
    var a= 1000;
    break;
}
console.log(a);

//호이스팅
console.log(word);
wrod = "happy";
console.log(word);
var word;

//let while 안에 변수 선언 말고 밖에 변수 output 10 나옴
let a=10;

while (true) {
    let a= 1000;
    break;
}
// const

const b =2
console.log(b);

b=3; 

//화살표 함수 
let plus =(a,b)=> {
    return a+b;
}

console.log(plus(2,3));

let plus = (a,b) => a+b
console.log(plus(2,3));
