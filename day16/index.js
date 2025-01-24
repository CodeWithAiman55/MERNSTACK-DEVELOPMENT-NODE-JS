function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("You walked the dog");
      } else {
        reject("You didn't walk the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;
      if (kitchenCleaned) {
        resolve("You cleaned the kitchen");
      } else {
        reject("You didn't clean the kitchen");
      }
    }, 2000);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = true;
      if (trashTakenOut) {
        resolve("You took out the trash");
      } else {
        reject("You didn't take out the trash");
      }
    }, 1000);
  });
}
walkDog()
  .then((result) => {
    console.log(result);
    return cleanKitchen();
  })
  .then((result) => {
    console.log(result);
    return takeOutTrash();
  })
  .then((result) => {
    console.log(result);
    console.log("You have finished all tasks");
  })
  .catch((error) => {
    console.error("Error in Promise Chaining:", error);
  });

Promise.all([walkDog(), cleanKitchen(), takeOutTrash()])
  .then((results) => {
    console.log("Results from Promise.all:", results);
    console.log("You have completed all tasks altogether");
  })
  .catch((error) => {
    console.error("Error in Promise.all:", error);
  })
  .finally(() => {
    console.log("Promise.all completed");
  });

Promise.race([walkDog(), cleanKitchen(), takeOutTrash()])
  .then((result) => {
    console.log("First resolved promise from Promise.race:", result);
  })
  .catch((error) => {
    console.error("Error in Promise.race:", error);
  });

Promise.allSettled([walkDog(), cleanKitchen(), takeOutTrash()]).then(
  (results) => {
    console.log("Results from Promise.allSettled:");
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log("Success:", result.value);
      } else {
        console.log("Failure:", result.reason);
      }
    });
    console.log("All tasks have settled");
  }
);
