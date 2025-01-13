/* 

This is an array of objects representing details of students. 
Each object contains:

* studentId: A unique identifier for each student
* studentName: The full name of the student 
* studentMarks: An array of objects representing the subjects taken by the student, where each object includes:
  - subject: The name of the subject 
  - marks: The marks obtained by the student in this subject 
  - cpga: The CGPA earned in this subject 

*/

const detailsOfStudents = [
  {
    studentId: "001",
    studentName: "Aimy",
    studentMarks: [
      {
        subject: "Software Construction Engineering",
        marks: 70,
        cpga: 2.9,
      },
      {
        subject: "Approach To Software Project Management",
        marks: 80,
        cpga: 3.2,
      },
      {
        subject:
          "Software Development and Quality Assurance Processes and Approaches",
        marks: 65,
        cpga: 2.5,
      },
      {
        subject: "Game Development with Unity",
        marks: 94,
        cpga: 3.8,
      },
    ],
  },
  {
    studentId: "002",
    studentName: "Paul",
    studentMarks: [
      {
        subject: "Software Construction Engineering",
        marks: 70,
        cpga: 2.9,
      },
      {
        subject: "Approach To Software Project Management",
        marks: 80,
        cpga: 3.2,
      },
      {
        subject:
          "Software Development and Quality Assurance Processes and Approaches",
        marks: 65,
        cpga: 2.5,
      },
      {
        subject: "Game Development with Unity",
        marks: 94,
        cpga: 3.8,
      },
    ],
  },
  {
    studentId: "003",
    studentName: "Diana",
    studentMarks: [
      {
        subject: "Software Construction Engineering",
        marks: 70,
        cpga: 2.9,
      },
      {
        subject: "Approach To Software Project Management",
        marks: 80,
        cpga: 3.2,
      },
      {
        subject:
          "Software Development and Quality Assurance Processes and Approaches",
        marks: 65,
        cpga: 2.5,
      },
      {
        subject: "Game Development with Unity",
        marks: 94,
        cpga: 3.8,
      },
    ],
  },
  {
    studentId: "004",
    studentName: "Seebo",
    studentMarks: [
      {
        subject: "Software Construction Engineering",
        marks: 70,
        cpga: 2.9,
      },
      {
        subject: "Approach To Software Project Management",
        marks: 80,
        cpga: 3.2,
      },
      {
        subject:
          "Software Development and Quality Assurance Processes and Approaches",
        marks: 65,
        cpga: 2.5,
      },
      {
        subject: "Game Development with Unity",
        marks: 94,
        cpga: 3.8,
      },
    ],
  },
];

// ! Iterate over each student in the array

detailsOfStudents.forEach((student) => {
  console.log(
    "======================== Student Details ========================="
  );
  console.log(`Student ID: ${student.studentId}`);
  console.log(`Student Name: ${student.studentName}`);
  console.log(
    "---------------------- Subjects and Marks ------------------------"
  );

  // ? Iterate over the student's subject details (marks and CGPA)
  student.studentMarks.forEach((subjectDetail, index) => {
    console.log(`Subject ${index + 1}: ${subjectDetail.subject}`);
    console.log(`Marks: ${subjectDetail.marks}`);
    console.log(`CGPA: ${subjectDetail.cpga}`);
  });

  console.log("=========================================\n");
});
