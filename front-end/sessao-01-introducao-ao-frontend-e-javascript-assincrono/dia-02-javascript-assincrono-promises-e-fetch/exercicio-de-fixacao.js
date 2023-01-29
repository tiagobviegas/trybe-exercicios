import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.

fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => {
    const { users } = data;
    fillUsersSelect(users);
  });

usersSelect.addEventListener('change', () => {
  clearPageData();

  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
  return fetch(`https://dummyjson.com/posts/user/${usersSelect.value}`)
    .then((response) => response.json())
    .then((data) => {
      const { posts } = data;
      posts.reverse();
      fillPosts(posts);
      const highlightedPostId = posts[posts.length - 1].id;
      highlightedPostId;
      fetch(`https://dummyjson.com/posts/${highlightedPostId}/comments`)
        .then((response) => response.json())
        .then((data) => {
          const { comments } = data;
          fillFeaturedPostComments(comments);
        });
    })
    .catch((error) => {
      fillErrorMessage('erro');
      console.log(error.message);
    });
});
