export function removeTodo(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  event.target.parentNode.remove();
}
