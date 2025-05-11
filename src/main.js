/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/
import { renderTask } from './js/render-tasks';
import { handleFormSubmit, handleTaskList } from './js/markup-tasks';

import { initStorage } from './js/local-storage-api';
initStorage();
renderTask();

import refs from './js/refs';
refs.form.addEventListener('submit', handleFormSubmit);
refs.tasksList.addEventListener('click', handleTaskList);
