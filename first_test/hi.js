
const obj = {
    first_name: `Vlad`,
    second_name: `Nitu`,
    uni: `TUDelft`,
    age: 19,
    hobby: `football`
};

console.log(`My name is ${obj.first_name} ${obj.second_name}`) ;
  
let i ; 

for (i = 0 ; i < 5 ; ++i) {
    
        setInterval(
           function() { 
               console.log(i) ;
           }
            , 1000) ; 
}


