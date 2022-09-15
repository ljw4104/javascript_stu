const name = ("과일");
const price = 10000;

const site = {
    사이트명:"네이버",
    url:'http://naver.com',
};
const product = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];

// console.log(product);

// console.log(product.제품명);
// console.log(product['제품명']);

// console.log(product[123]);
// console.log(product["제품 분류"]);
// console.log(product.판매처);
// product.printbrand("이정운");
// product.printModel("이정운");

// const json = JSON.stringify(product, null,4);
// console.log(json);
// const obj = JSON.parse(json);
// console.log(obj);
// console.log(typeof console);
// delete product.용량;
String.prototype.toPrint = function(){
    console.log(`[2022-09-06]` + this.valueOf());
}
"dd".toPrint();

const arr = [10,20,30,50,80,100];
const max = Math.max(...arr);
console.log(max);
const random = Math.random()*1000
console.log(Math.floor(random)/100);
const compare = (a,b)=>{
    console.log(a);
    if(a.value < b.value) {
        return -1;
    }
    if(a.value > b.value) {
        return 1;
    }
    return 0;
}

const sort = product.sort(compare);
console.log(sort);
