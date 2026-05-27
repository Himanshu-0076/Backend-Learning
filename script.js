// Array

arr = [1,2,3,4]
// forEach
arr.forEach(function(element){
    // console.log(element)
})


// map :- Retrun new array
var newarr = arr.map(function(val){
    return val;
    // return 13;
})

// console.log(newarr)

// Filter, :- Retrun new array 

var newarray = arr.filter(function(val){
    if(val> 3){return true }
    else return false
})

console.log(newarray)

var num = arr.find(function(val){
    if(val === 2 ) return val ;
})
console.log(num)

// indexof is used to find the any element and it return (1 or -1 ) 1-> denote present and -1 -> denoter not present

// Objects :- Key values pairs
var obj = {
    name: "kuchbhi",
    age: 23
}

// we can change key outer the obj 
obj.age = 30
console.log(obj.name)
// console.log(obj["age"])


// we can freeze the obj by using Freeze
Object.freeze(obj)
obj.age = 20
console.log(obj.age)

// Functions
function abcd(){
    return 21;
}
console.log(2);
console.log("age")
var vaa = abcd()
console.log(vaa)

// async js

// sync :- line by line code chale ise khate ha synchronous
// async:- jo bhi async nature ka ho use side stack me bhej do and agle code ko chalao jab bhi sync nature k aho jab bhi saara sync code chal jayee, tab check kro ki async code complete hua ya nhi agar complete hua to use main stack me lao or chalao 

async function abcd (){
    var blob = await fetch(`https://randomuser.me/api/`)
    var raw = await blob.json();

    console.log(raw)
}


