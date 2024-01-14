// console.log('person1:shows tickets');
// console.log('person2:shows tickets');

// const promisewifebringtickets= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// });
// const getpopcorn=promisewifebringtickets.then((t)=>{
//     console.log('husband:we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`));

// });
// const getbutter=getpopcorn.then((t)=>{
//     console.log('husband:we should go in');
//     console.log('wife: no need butter on my popcorn');
//     return new Promise((resolve,reject)=>resolve(`${t} burger`));
// });
// getbutter.then((t)=>console.log(`${t}`));
// console.log('person4:shows tickets');
// console.log('person5:shows tickets');


console.log('person1: shows ticket'); 
console.log('person2: shows ticket');
const preMovie =async() =>{

const promisewifeBringingTickes= new Promise((resolve, reject)=> {
     setTimeout(()=>{
resolve('titcket');
     },3000)
     });

const getpopcorn=new Promise((resolve,reject)=>resolve('popcorn'));
const getCandy=new Promise((resolve,reject)=>resolve('candy'));
const getcake=new Promise((resolve,rejct)=>resolve('cake'));
const getColdDrinks=new Promise((resolve,reject)=>resolve('coldDrink'));

let ticket=await promisewifeBringingTickes;
let [popcorn,Candy,cake,coldDrink] =await Promise.all([getpopcorn,getCandy,getcake,getColdDrinks]);
console.log(`${popcorn} ${Candy} ${cake} ${coldDrink}` );

 return ticket;
    }
preMovie().then((m) =>console.log(`person3:${m}`));

console.log('person4: shows ticket');

