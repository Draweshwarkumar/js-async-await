// console.log("One");
// console.log("Two");
// console.log("Three");

// function hello (){
//     console.log("hello");
// }

// setTimeout(hello,2000);

// console.log("one");
// console.log("one");

// setTimeout ( () =>{
//     console.log("hello");
// },4000);

// console.log("one");
// console.log("one");

// function Sum(a,b) {
//     console.log(a+b);
// }
 
//  function calculator(a,b ,sumcallback ){
//     sumcallback(a,b);
//  }

//  calculator(1,2,Sum);

// let age = 80;
// if(age >= 18){
//     if(age >= 70){
//         console.log("senior");
//     }
//     else{
//         console.log("middle");
//     }

// }
// else{
//     console.log("child");
// }

// function getData(dataId,getNextData){
//     setTimeout(() => {
//         console.log("data" , dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// };

//  CALL BACK HELL

// getData(1,() =>{
//     console.log("getting data2.......");
//     getData(2, () =>{
//         console.log("getting data3......")
//         getData(3);
//     });
// });


// let promise = new Promise((resolve,reject) =>{
//     console.log("I am a promise");
//     // resolve(123);
//     reject("some error occured");
// });


// function getData (dataId, getNextData){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             console.log("data" , dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         } , 5000);
//     });
// }


const getPromise = () =>{
    return new Promise((resolve , reject) =>{
        console.log("I am a promise");
        resolve("success");
        reject("network error");
    });
};

let promise = getPromise();
promise.then((res) =>{
    console.log("promise fulfilled" , res);
});

promise.catch((err) =>{
    console.log("rejected" , err);
});