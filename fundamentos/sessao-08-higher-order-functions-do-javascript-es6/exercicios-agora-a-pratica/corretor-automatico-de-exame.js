const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const result = (answers, grades, check) => {
  return check(answers, grades)
}

const checkGrades = (answerSheet, studentSheet) => {
  let mark = 0;
  answerSheet.forEach((answer) => studentSheet.forEach((grade) => {
    if (answer === grade) {
      mark += 1;
    } else if (grade === 'N.A') {
      mark += 0;
    } else {
      mark -= 0.5;
    }
  }))
  return mark
}

console.log(result(RIGHT_ANSWERS, STUDENT_ANSWERS, checkGrades));