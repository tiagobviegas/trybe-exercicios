const {
  errorMessage,
  welcomeMessage,
  verifyResident,
} = require("./frase1.js");

describe('verifyResident() checks if ', () => {
  
  it('verifyResident() returns the right message if a different input name than "Tiago"', () => {
    
    const newResident = {
      name: 'Roberto',
      lastName: 'Viegas',
    };

    const { name, lastName } = newResident;

    expect(verifyResident({ name, lastName })).toBe(
      'Sorry, Roberto Viegas is not in Canada.'
    );
  });

  it('verifyResident() returns a welcome message if the "name" and "lastName" get proper inputs', () => {
    const newResident = {
      name: 'Tiago',
      lastName: 'Viegas',
    };

    const { name, lastName } = newResident;

    expect(verifyResident({ name, lastName })).toBe(
      'Hello, Tiago Viegas. Welcome to Canada.'
    );
  })
});