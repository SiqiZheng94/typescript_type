import './App.css'
import {Grade, Student} from "./Student.ts";

function App() {

  const student1 :Student = {
    firstName:"Max",
    lastName:"Example",
    age:17,
    grades:["A", 2, undefined, 3, 1, "B", 2, 5],

  };
  const student2 :Student = {
    firstName:"Anna",
    lastName:"Test",
    age:14,
    grades:[undefined, 5, undefined, undefined, "A", "A", undefined, 2],
  };

  function printStudent (student : Student) {
    console.log(`${student.firstName} ${student.lastName} (${student.age})`);
    console.log("=".repeat(30));
    console.log("Noten:");

    const formattedGrades= student.grades.map(
        grade=>(grade === undefined ? "*" :grade)
    );


    console.log(`${formattedGrades}`);
  }

  const allStudents: Student[] = [student1, student2];
  allStudents.forEach(student=> console.log(printStudent(student)));




  return (
    <>
    </>
  )
}

export default App
