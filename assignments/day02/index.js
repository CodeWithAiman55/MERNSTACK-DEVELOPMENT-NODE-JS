// & ===============================Start Of Program===============================

// * Function to check if a given day is a weekday or weekend

function isWeekday(day) {
  // ! Check if the input is a string. If not, return an object indicating invalid input.

  if (typeof day !== "string") {
    return {
      isWeekday: false,
      message: "Invalid input. Please provide a string.",
    };
  }

  // ? Define an array of weekdays
  const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  // ? Define an array of weekends
  const weekends = ["saturday", "sunday"];

  // ? Convert the input day to lowercase to make the function case-insensitive
  const lowerCaseDay = day.toLowerCase();

  // ? Check if the input day is a valid weekday
  const isWeekday = weekdays.includes(lowerCaseDay);

  // ? Check if the input day is a valid weekend
  const isWeekend = weekends.includes(lowerCaseDay);

  // ! Return an object
  if (isWeekday) {
    return {
      isWeekday: true,
      message: `${day} is a weekday.`,
    };
  } else if (isWeekend) {
    return {
      isWeekday: false,
      message: `${day} is a weekend.`,
    };
  } else {
    return {
      isWeekday: false,
      message: `${day} is not a valid day.`,
    };
  }
}

console.log(isWeekday("Thursday"));
console.log(isWeekday("Sunday"));
console.log(isWeekday(123));
console.log(isWeekday("Funday"));

// & ================================End Of Program=================================
