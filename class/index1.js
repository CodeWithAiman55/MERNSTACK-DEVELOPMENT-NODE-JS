/* const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Ahmed" },
  { id: 3, name: "Sara" },
];

const userMeta = [
  { userId: 1, order: "Italian Shoes" },
  { userId: 1, order: "Italian Jacket" },
  { userId: 2, order: "Swiss Watch" },
];

function resolveUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((u) => u.id === userId);
      if (user) {
        resolve(user);
      } else {
        reject(`User with ID ${userId} not found`);
      }
    }, 2000);
  });
}

function resolveUserMeta(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const meta = userMeta.filter((meta) => meta.userId === userId);
      if (meta.length > 0) {
        resolve(meta);
      } else {
        reject(`No metadata found for user ID ${userId}`);
      }
    }, 1000);
  });
}

async function runMyPromise(userId) {
  try {
    const [userData, userMetaData] = await Promise.all([
      resolveUserData(userId),
      resolveUserMeta(userId),
    ]);

    console.log("User Data:", userData);
    console.log("User Orders:", userMetaData.map((meta) => meta.order));
  } catch (error) {
    console.error("Error:", error);
  }
}

runMyPromise(1);  */




const users = [
  { id: 1, name: "gjjjli" },
  { id: 2, name: "Ahmed" },
  { id: 3, name: "Sara" },
];

const userMeta = [
  { userId: 1, order: "Italian Shoes" },
  { userId: 2, order: "Italian Jacket" },
  { userId: 2, order: "Swiss Watch" },
];

function resolveUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((u) => u.id === userId);
      if (user) {
        resolve(user);
      } else {
        reject(`User with ID ${userId} not found`);
      }
    }, 2000);
  });
}

function resolveUserMeta(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const meta = userMeta.filter((meta) => meta.userId === userId);
      if (meta.length > 0) {
        resolve(meta);
      } else {
        reject(`No metadata found for user ID ${userId}`);
      }
    }, 1000);
  });
}

async function runMyPromise(userId) {
  Promise.all([resolveUserData(userId), resolveUserMeta(userId)])
    .then(([userData, userMetaData]) => {
      console.log("User Data with Promise all:", userData);
      console.log("User Orders wiith Promise all:", userMetaData.map((meta) => meta.order));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

runMyPromise(1); 
runMyPromise(4); 

//try catch with user condition
//previous assignment ot be done with async await
