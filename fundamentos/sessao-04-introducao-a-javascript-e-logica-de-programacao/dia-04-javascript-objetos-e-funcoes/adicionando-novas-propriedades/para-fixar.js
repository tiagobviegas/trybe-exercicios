const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};

const addProperty = (object, key, value) => {
  if (object[key] === undefined) {
    object[key] = value;
  }
};

addProperty(customer, 'email', 'roberto@trybe.com.br');
addProperty(customer, 'fone', 1234567890);
addProperty(customer, 'userGithub', 'robertotryber');
addProperty(customer, 'linkedIn', 'robertotryberjob');
