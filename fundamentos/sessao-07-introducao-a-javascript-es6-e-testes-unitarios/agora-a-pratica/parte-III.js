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


const addNightShift = (object, key, value) => {
  object[key] = value
  return lesson2
};
console.log(addNightShift(lesson2, 'turno', 'noite'));

const keys = (object) => {
  return Object.keys(object)
};
console.log(keys(lesson1))

const objectSize = (object) => {
  
};

const objectValues = (object) => {

};

const allLessons = {};
Object.assign(allLessons, lesson1, lesson2, lesson3)

// console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/