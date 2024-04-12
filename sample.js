//type conversion example


// let str = "3";
// let num = 5;
// let sum = str + num;

/////////////////////// map vs set

// const mySet = new Set();
//  mySet.add(1);
//  mySet.add(2);
//  mySet.add(3);
//  mySet.add(3);
//  console.log(mySet.has(3));
//  console.log(mySet);


 
//  const myMap = new Map();

//  myMap.set(1,"one");
//  myMap.set(2,"two");
//  myMap.set(3,'three');
// console.log( myMap.has(9));
//  console.log(myMap);

///promises

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 2000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Promise 2 rejected');
    }, 1000);
  });
  
  Promise.all([promise1, promise2])
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error(error);
    });
  