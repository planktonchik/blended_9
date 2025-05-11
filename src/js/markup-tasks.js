import { v4 as uuidv4 } from 'uuid';
import {
  addTaskToLocalStorage,
  removeTaskToLocalStorage,
} from './local-storage-api';
import { renderTask } from './render-tasks';

export function handleFormSubmit(evt) {
  evt.preventDefault();
  const taskName = evt.currentTarget.elements.taskName.value.trim();
  const taskText = evt.currentTarget.elements.taskText.value.trim();
  if (!taskName || !taskText) {
    alert('Введіть данні у всі поля');
    return;
  }
  const newTask = { id: uuidv4(), taskName, taskText };
  addTaskToLocalStorage(newTask);
  evt.currentTarget.reset();
  renderTask();
}

export function handleTaskList(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('task-list-item-btn')) {
    return;
  }
  const id = evt.target.dataset.id;
  removeTaskToLocalStorage(id);
  renderTask();
}
