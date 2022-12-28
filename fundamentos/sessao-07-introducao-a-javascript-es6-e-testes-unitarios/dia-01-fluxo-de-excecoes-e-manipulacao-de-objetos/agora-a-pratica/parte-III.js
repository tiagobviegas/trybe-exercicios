const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNightShift = (obj, key, value) => obj[key] = value;
addNightShift(lesson2, 'turno', 'noite');
// console.log(lesson2);

const getObjKeys = (obj) => Object.keys(obj);

const getObjSize = (obj) => Object.entries(obj).length;

const getObjValues = (obj) => Object.values(obj);

const lessons = [lesson1, lesson2, lesson3];
const allLessons = {};
for (let i = 0; i < lessons.length; i += 1) {
  const newObject = {};
  const newKey = `lesson${i + 1}`;
  const newValue = lessons[i];
  newObject[newKey] = newValue;
  Object.assign(allLessons, newObject);
};

// console.log(allLessons);

const allStudents = (obj) => {
  let sum = 0;
  for(let i = 0; i < getObjSize(obj); i += 1) {
    sum += getObjValues(obj)[i].numeroEstudantes
  };
  return sum;
};

// console.log(allStudents(allLessons));

const getValueByNumber = (obj, pos) => getObjValues(obj)[pos];

// console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => {
  for (let i = 0; i < getObjSize(obj); i += 1) {
    if (getObjKeys(obj)[i] === key && getObjValues(obj)[i] === value) {
      return true;
    };
  };
  return false;
};

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

const sumMathStudents = (lessons) => {
  let sum = 0;
  for (let i = 0; i < getObjSize(lessons); i += 1) {
    if(getObjValues(lessons)[i].materia === 'Matemática') {
      sum += getObjValues(lessons)[i].numeroEstudantes
    }
  }
  return sum;
}

const createReport = (obj, teacher) => {
  const subject = [];
  const report = {};
  let newKey = '';
  for (let i = 0; i < getObjSize(obj); i += 1) {
    if (getObjValues(obj)[i].materia === 'Matemática') {
      subject.push(getObjValues(obj)[i].materia);
    }
  }
  newKey = 'professor';
  report[newKey] = teacher;
  newKey = 'aulas';
  report[newKey] = subject;
  newKey = 'estudantes';
  report[newKey] = sumMathStudents(obj);
  return report;
};

// console.log(createReport(allLessons, 'Maria Clara'));
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */