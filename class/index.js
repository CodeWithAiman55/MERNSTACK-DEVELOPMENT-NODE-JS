// function abcRest(...xyz) {
//   console.log(xyz);
// }
// abcRest(1, 2, 3);

// bydefault nature of spread, rest parameter return an array
//pushing in existing array

//call back hell function

// getUser(1,user => get)
// function kai andar function

/* function getUser(...) { 
  console.log(x,y);
  function getOrders(){

  }
  
 }
 getUser(1,20,()=>getOrders) */

// non blocking operation, nature is asynchronous
// server side request
//post req body mai gaye
// end function task is performing asynchronously
// app.post
// async await

//promise hm islye bana rahe hn hm data ko manipulate kar sakren
//data ko manga saken ya to data ayega ya nhi ayega
//before promise there is a hell function settime out
//if data comes from server tehn no set time out
// if found data

//else error

/* let p = new Promise(function (resolve, reject) {
  const x = 1 + 2;
  if (x === 3) {
    resolve("Success");
  } else {
    //message come from server side which is called exception handling
    reject("Fail");
  }
});

let myP = Promise.resolve

p.then(function(message){
  console.log("The result is now " + message);
}).catch(function(message){
  console.log("The result is now " + message);
}).finally(function(message){
  console.log("The result is now " + message);
}) */
//promise is server side chain
//user order
//order meta
//order sale
//3 promise method 3 function how to execute here
// 3 promise ko merge krna or usko print karwana
//promise.all()
//nature of all i array

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// Expected output: Array [3, 42, "foo"]

//then -> run on success case
//catch -> run on error case
//finally -> error kai case mai kuch or bhi show krna hai

//race -> run
//follows fifo
//follow fifo and lifo
//queue or stack

/* const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'two');
});

Promise.race([promise1, promise2])
  .then((value) => {
    console.log(value); // Won't be executed because promise2 rejects first
  })
  .catch((error) => {
    console.log(error); // "two" is printed because promise2 rejects first
  });
 */

/* const hardcodedUserId = 12345;

function getUserId(inputUserId) {
  return new Promise((resolve, reject) => {
    if (inputUserId === hardcodedUserId) {
      resolve(`Hardcoded user ID is : ${hardcodedUserId}`);
    } else {
      reject('User is not in the list');
    }
  });
}

getUserId(12345)  
  .then((result) => {
    console.log(result); 
  })
  .catch((error) => {
    console.log(error); 
  }); */

//LEXICAL SCOPE

// Hardcoded user ID and order ID
/* const hardcodedUserId = 481921;
const hardcodedOrderId = "ORDID-US001";

function getUserId(inputUserId) {
  return new Promise((resolve, reject) => {
    if (inputUserId === hardcodedUserId) {
      resolve(`User ID: ${hardcodedUserId}`);
    } else {
      reject("Invalid User ID");
    }
  });
}

function getOrderId(userId) {
  return new Promise((resolve, reject) => {
    if (userId === hardcodedUserId) {
      resolve(`Order ID: ${hardcodedOrderId}`);
    } else {
      reject("No order found for this user");
    }
  });
}

getUserId(12345)
  .then((userResult1) => {
    console.log(userResult1);
    // return getOrderId(hardcodedUserId);
  })
  .then((orderResult2) => {
    console.log(orderResult2);
  })
  .catch((error) => {
    console.log(error);
  });
 */
/* 
  function task1(pretask1){
    return new Promise((resolve)=>{
      setTimeout
    })
  }
  //chain promises
  task1().then(result1)=>task2(result2).then(result2)=>task3(result2).then(()=>{

  }) */

// Example asynchronous tasks (functions returning promises)
/* function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task 1 completed");
      resolve("Result from Task 1");
    }, 1000);
  });
}

function task2(result1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task 2 completed with:", result1);
      resolve("Result from Task 2");
    }, 1000);
  });
}

function task3(result2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task 3 completed with:", result2);
      resolve("Task 3 finished");
    }, 1000);
  });
}

// Correct Promise chaining with proper syntax
task1()
  .then((result1) => {
    return task2(result1); // Pass result1 to task2
  })
  .then((result2) => {
    return task3(result2); // Pass result2 to task3
  })
  .then(() => {
    console.log("All tasks completed!");
  })
  .catch((error) => {
    console.log("Error:", error);
  }); */

// task1().then(result1)=>task2(result2).then(result2)=>task3(result2).then(()=>{

// }) */
//long method then short method

/* function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved after 2s");
    }, 2000);
  });
}

function resolveAfter3Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved after 3s");
    }, 3000);
  });
}

async function runMyPromise() {
  const result1 = await resolveAfter2Seconds();
  const result2 = await resolveAfter3Seconds();
  console.log(result1);
  console.log(result2);
}

runMyPromise();


// resolveAfter2Seconds().then(() => {

// }); */
// runMyPromise();
// when we use async function it is necessary to put await

//user normal information

// const userInfo = [
//   {
//     id: 1,
//     name: "Ali",
//   },
//   {
//     id: 2,
//     name: "Ahmed",
//   },
//   {
//     id: 3,
//     name: "Sara",
//   },
// ];

// const userMeta = [
//   {
//     userid: 1,
//     order: "Italian Shoes",
//   },
//   {
//     userid: 1,
//     order: "Italian Jacket",
//   }
// ];

/* function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Ali",
        },
        {
          id: 2,
          name: "Ahmed",
        },
        {
          id: 3,
          name: "Sara",
        },
      ]);
    }, 2000);
  });
}

function resolveAfter3Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        {
          userid: 1,
          order: "Italian Shoes",
        },
        {
          userid: 1,
          order: "Italian Jacket",
        }
      );
    }, 3000);
  });
}

async function runMyPromise() {
  try {
    const userdata = await resolveAfter2Seconds();
    const orderdata = await resolveAfter3Seconds();

    if (userdata) {
      let userId = userdata.id;
      console.log("User ID:", userId);
    }

    console.log("User Data:", userdata);
    console.log("Order Data:", orderdata);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
runMyPromise();
 */

function userFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Ali" },
        { id: 2, name: "Ahmed" },
        { id: 3, name: "Sara" },
      ]);
    }, 2000);
  });
}

function OrderFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { userId: 1, order: "Italian Shoes" },
        { userId: 1, order: "Italian Jacket" },
      ]);
    }, 3000);
  });
}

async function runMyPromise() {
  try {
    const userdata = await userFunction();
    const orderdata = await OrderFunction();

    if (userdata && userdata.length !== 0) {
      userdata.forEach((user) => {
        console.log(
          `The id of user is: ${user.id} and Name of user is: ${user.name}`
        );
      });
    }

    console.log("User Data:", userdata);
    console.log("Order Data:", orderdata);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

runMyPromise();
