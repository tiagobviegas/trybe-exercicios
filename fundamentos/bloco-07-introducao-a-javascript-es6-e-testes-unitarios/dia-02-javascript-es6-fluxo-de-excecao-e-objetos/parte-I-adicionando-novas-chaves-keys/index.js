const student = {
  fullName: 'Aaron Lopes Viegas',
  age: 12,
  job: 'student',
};

let newKey = 'BornCity';
const city = 'Vancouver';
student[newKey] = city;
newKey = 'address';
const location = '101 7139 133A Street';
student[newKey] = location;
newKey = 'Neighborghood';
const community = 'Surrey, BC';
student[newKey] = community;
newKey = 'favoriteSubjects';
const studies = {subject1: 'math', subject2: 'physics', subject3: 'geography', subject4: 'history',};
student[newKey] = studies;

console.log(`${student['fullName']} nasceu em ${student.BornCity}, na rua ${student.address}, em ${student['Neighborghood']}.`);
console.log(student.favoriteSubjects.subject2);
