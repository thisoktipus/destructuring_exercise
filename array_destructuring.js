const students = [
  { name: "drake", gpa: 4.6 },
  { name: "henrietta", gpa: 4.4 },
  { name: "tung", gpa: 4.0 },
  { name: "harry", gpa: 3.8 },
  { name: "ant", gpa: 3.2 },
];

//double comma skips//
const [topStudent, secondBest,,fourth] = students;

//rest//
const [first, ...losers] = students;