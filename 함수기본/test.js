console.log()

const myData = (...data) => {
    var result = data[0];
    console.log(data.join(","))
    for(var i = 1; i < data.length; i++){
        result = result + data[i];
        console.log(result);
    }
    return result;
};
console.log(myData("ㅎㅇ","방가","여긴","선문대"))






// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,5));

// const sum2 = function(a,b){
//     return a+b;
// }
// console.log(sum(4,6));

// //동일 의미
// const sum3 = (a,b) => a+b;
// console.log(sum(3,2));

//prompt("입력하세요");
// const userPromptResult = prompt("좋아하는 과일은 뭐에요?","사과");
//  console.log(result);

// const userConfirmResult =confirm("경고창")
// console.log(result2);

// const isLeapTYear = (year) => (year % 4 ===0) && (year % 100 !== 0) || (year % 400 === 0)

// console.log(`2020년은 윤년일까? === ${isLeapTYear(2020)}`)

// const abcd = 100
// const min = (a,b) =>{
//     var result = a<b ? a:b;
//     return result;
// }
// console.log(min(25,22))
// console.log(max(25,24,22))
/*
const arrMin = (arr) =>{
    var result = arr[0];
    for(var i = 1 ; i < arr.length; i++){
        result = result < arr[i] ? result:arr[i]
    }
    return result;
}
*/

/*
const min = (...items) => {
    console.log(items);
};
console.log("asd","asdaf","asdafq")
console.log(min(10,20,30,40,50))
const arrMax = (arr) =>{
    var result = arr[0];
    for(var i = 1 ; i < arr.length; i++){
        result = result > arr[i] ? result:arr[i]
    }
    return result;
}
 const input = [10,20,30,40,80,90,1230,12];
 console.log(arrMax(input))
*/




// function main(a,b,c){
//     console.log('a값은 $(a) 입니다');
//     console.log('b값은 ${b} 입니다');
//     console.log('c값은 ${c} 입니다');
// }

// main(10,20,30);
// main();

// console.log(typeof main);

// console.log(typeof main);
// console.log(typeof 1234);
// console.log(typeof "1234");
// console.log(typeof [1,2,3,4]);

// const obj = {a:1,b:2}
// console.log(typeof obj);

// console.log(console.log);

// const main2 = function () {
//     console.log("두번째 함수")
// };

// main2();

// main2 = function () {
//     console.log("새 정의")
// };
// main2();