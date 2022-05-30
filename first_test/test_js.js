const items = [ 
{name: "one", price: 100},
{name: "two", price: 50},
{name: "three", price: 50},
{name: "four", price: 25}
];

// function doSmth(item) { 
//     console.log(item.name) ;
// };

// const itemsFiltered = items.filter((item) => {return item.price >= 75}) ;

// const itemsMapped = items.map(item => item.name) ;

// const itemFound = items.find(item => item.price === 50) ;

// items.forEach(item => { 
//     console.log(item.name) ;
// });

//Following 2 calls do the exact same thing
//  items.forEach(item => doSmth(item)) ;
//  items.forEach(doSmth) ;


const totalPrice = items.reduce((total, item) => total + item.price , 0);
console.log(totalPrice) ; 

const objArray = [
    { 
    name: "Vlad", 
    money: 150,
    currency: "lei"
    },
    {
        name: "Dan",
        money: 100,
        currency: "euro"
    }

];

console.log(objArray) ;


const newVar = { 
    code: 120,
    item: "mancare",
    price: 124, 
    contained: ["one", "two", "three"] 
}

const arr = ["mom", "dad", "asd"]

for (let index in newVar) // Iterate through properties of he array
    console.log(index)

for (var element of arr) // Iterate through the elements of the array
    console.log(element)
    

    /*
arr.filter(item => item === "asd")
.forEach(item => console.log(item))
*/

/*
console.log(newVar.code + "\n" + newVar.item + "\n" + newVar.price)
newVar.contained.forEach(el => console.log(el.substring(0,2)))
*/
