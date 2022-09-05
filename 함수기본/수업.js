//const arr = [10, 50, 30, 11, 15, 23, 32];
/*
const time = (callback) => {
    for(let i=0; i<3; ++i){
        if(i===2){
            callback(i)
        }
    }
}


const myPrint = (idx) => console.log(`${idx} 번째 함수 호출`);

time(myPrint);



const myFn = (value, index) =>{
    console.log(`${index+1}번째:${value}`)
    return value * value;
}

const forEachResult = arr.forEach(myFn);

// console.log(forEachResult);
 const mapResult = arr.map(myFn);
 console.log(mapResult);
*/
/* 
const filterfn = (value, index, arr) => {
    console.log(`${index} : ${value}`);
    if(value % 2 === 0){
        return true;
    }else{
        return false;
    }
 }
 const filterResult = arr.filter(filterfn);
 console.log(filterResult);
*/
const arr=[2,4,6,8,10,83,93,45,12,1201]
// const sum = (arr) =>{ var result = arr[0];
//     var result = arr[0];
//     for(var i = 1 ; i < arr.length; i++){
//         result = result + arr[i]
//     }
//     return result;
// }
// console.log(sum(arr));

const refn = (acc, cur, idx, src) =>{
    console.log(`acc:${acc} / cur:${cur} / idx:${idx} / src:${src}`);
    return acc+cur;
}
const result = arr.reduce(refn,0);
console.log(result);
 /*arr.push("홍길동");
 arr.push(1234);
 arr.push([1,2,3,4])
 console.log(arr.pop());
 console.log(arr);
 arr.pop();
 
 console.log(arr.reverse())
 const filterfn = (value, index, arr) => {
    console.log(`${index} : ${value}`);
    if(value.indexOf('이', 0) === 0) return true;
    else return false;
    
 }
 
 const filterResult = arr.filter(filterfn);
 console.log(filterResult);*/
 