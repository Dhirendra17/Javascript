// Primitives in Js
//Number,Null,Boolean,Bigint,string,symbol,undefined
// Abbrevation:- nn bb ss u 

let a = null;
let b = 777;
let c = true; // can also be false
let d = BigInt("777") + BigInt("3")
let e = "Dhirendra"
let f = Symbol("I am a  symbol")
let g
console.log(a, b, c , d, e, f, g)
console.log(typeof c)

// Non Primitive Data Type - Objects in Js
const item = {
  "John": true,
  "Eric": false,
  "Tom": 67,
  "Smith": undefined
}
console.log(item["Eric"])
console.log(item["Tom"])