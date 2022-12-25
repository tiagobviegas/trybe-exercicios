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

console.log(allStudents(allLessons));
