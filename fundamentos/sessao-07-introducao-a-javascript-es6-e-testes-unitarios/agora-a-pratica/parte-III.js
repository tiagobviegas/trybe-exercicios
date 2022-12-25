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

const addNightShift = (object, key, value) => object[key] = value;
addNightShift(lesson2, 'turno', 'noite');

const getObjKeys = (object) => Object.keys(object);

const getObjSize = (object) => Object.entries(object).length;

const getObjValues = (object) => Object.values(object);

const lessons = [lesson1, lesson2, lesson3];
const allLessons = {};
for (let i = 0; i < lessons.length; i += 1) {
  const newObject = {};
  const newKey = `lesson${i + 1}`;
  const newValue = lessons[i];
  newObject[newKey] = newValue
  Object.assign(allLessons, newObject)
};

console.log(allLessons);