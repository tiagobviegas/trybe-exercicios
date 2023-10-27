const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const result = (answers, grades, check) => {
  let mark = 0;
  for (let i = 0; i < answers.length; i += 1) {
    mark += check(answers[i], grades[i])
  }
  return mark;
}

const answerCheck = (answers, grades) => {
  if (answers === grades) {
    return 1;
  } else if (grades === 'N.A') {
    return 0;
  } else {
    return -0.5;
  }
}

console.log(result(RIGHT_ANSWERS, STUDENT_ANSWERS, answerCheck));
