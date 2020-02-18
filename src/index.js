function component() {
  const elem = document.createElement('div');
  elem.innerHTML = 'Hello Davies';

  return elem
}

document.body.appendChild(component());