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

const getKeys = object => Object.keys(object);
console.log(getKeys(lesson2));

const getSize = object => Object.entries(object).length;
console.log(getSize(lesson2));

const getValues = object => Object.values(object);
console.log(getValues(lesson2));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

const getStudents = (allClasses) => {
  let allStudents = 0;
  const arrStudents = Object.values(allClasses);
  for (let value of arrStudents) {
    allStudents += value.numeroEstudantes
  }
  return allStudents
}
console.log(getStudents(allLessons));

const getValueByNumber = (object, index) => {
  const key = Object.values(object)
  return key[index];
}
console.log(getValueByNumber(lesson1, 0));

const verifyPair = (object, key, value) => {
  const entries = Object.entries(object);
  for (let i = 0; i < entries.length; i += 1) {
    if (entries[i][0] === key && entries[i][1] === value) {
      return true;
    }
  }
  return false;
};
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false