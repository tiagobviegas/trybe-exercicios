const newResident = {
  name: 'Tiago',
  lastName: 'Viegas',
}

const errorMessage = (name, lastName) => `Sorry, ${name} ${lastName} is not in Canada.`;
const welcomeMessage = (name, lastName) => `Hello, ${name} ${lastName}. Welcome to Canada.`;

const verifyResident = ({name, lastName}) => {
  if (name !== 'Tiago' || lastName !== 'Viegas') {
    return errorMessage(name, lastName);
  } else {
    return welcomeMessage(name, lastName);
  }
}

const { name, lastName } = newResident;

module.exports = {errorMessage, welcomeMessage, verifyResident};