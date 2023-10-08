import { nanoid } from 'nanoid';
import './style.css';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
const limparBtn = document.querySelector('#clear');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});

limparBtn.addEventListener('click', () => {
  displayPasswordEl.innerHTML = '';
});
