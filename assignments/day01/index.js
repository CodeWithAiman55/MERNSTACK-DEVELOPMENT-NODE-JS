// & ===============================Start Of Program===============================

// * Function to calculate grade based on marks
function calculateGrade(marks) {
  if (marks >= 90) {
    // ! Marks 90 and above receive grade A+
    console.log("You have recieved grade A+");
    return "A+";
  } else if (marks >= 80) {
    // ! Marks 80 and above receive grade A
    console.log("You have recieved grade A");
    return "A";
  } else if (marks >= 70) {
    // ! Marks 70 and above receive grade B
    console.log("You have recieved grade B");
    return "B";
  } else if (marks >= 60) {
    // ! Marks 60 and above receive grade C+
    console.log("You have recieved grade C");
    return "C";
  } else if (marks >= 45) {
    // ! Marks 45 and above receive grade D+
    console.log("You have recieved grade D");
    return "D";
  } else {
    // ! Marks below 45 are considered as fail
    console.log("Sorry, You are fail!!!");
    return "F";
  }
}

// * Student data is stored in form of array of object
const arrayOfStudents = [
  { name: "Tom", marks: 70 },
  { name: "Jerry", marks: 85 },
  { name: "Nobita", marks: 43 },
  { name: "Seebo", marks: 95 },
  { name: "Doraemon", marks: 65 },
  { name: "Lily", marks: 55 },
  { name: "Aimy", marks: 45 },
];

// * Table body is selected to insert rows dynamically
const tableBody = document.querySelector("#student-table tbody");

// * Loop through each student in the array
arrayOfStudents.forEach(({ name, marks }) => {
  const grade = calculateGrade(marks); // ? function call is executed to calculate grades based on marks of students and storing in a seperate variable

  const row = ` 
  <tr>
  <td>${name}</td>    <!-- Student's name -->
  <td>${marks}</td>   <!-- Student's marks -->
  <td>${grade}</td>   <!-- Student's grade -->
  </tr>
  `; // ? The row variable dynamically creates the HTML markup for a table row.

  tableBody.innerHTML += row; // ? appends the row to the table body.
});

// & ================================End Of Program=================================
