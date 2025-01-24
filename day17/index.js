

function enrollStudent(studentName, courseName, attendance) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccessful = Math.random() > 0.4;

      if (isSuccessful) {
        resolve({
          studentName,
          courseName,
          attendance,
        });
      } else {
        reject(`${studentName} is not enrolled in ${courseName}.`);
      }
    }, 5000);
  });
}

const students = [
  { name: "Alpha", course: "JavaScript Basics", attendance: "90%" },
  { name: "Beta", course: "CSS Fundamentals", attendance: "85%" },
  { name: "Gamma", course: "HTML for Beginners", attendance: "95%" },
  { name: "Delta", course: "ReactJS Advanced", attendance: "88%" },
];

async function enrollAllStudents() {
  for (const student of students) {
    try {
      const result = await enrollStudent(
        student.name,
        student.course,
        student.attendance
      );
      console.log(
        `Student: ${result.studentName} Course: ${result.courseName} Attendance: ${result.attendance}`
      );
    } catch (error) {
      console.error(error);
    } finally {
      console.log(
        `Enrollment process for ${student.name} finished after 5 minutes code execution.`
      );
    }
  }
}

enrollAllStudents();
