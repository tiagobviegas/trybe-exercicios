// O Template Literals permite compor strings complexas de forma mais prática, inteligente e dinâmica.
const myName = 'Isabella';
console.log('Hello' + ' ' + myName + '!');
console.log(`Hello ${myName}`);

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');