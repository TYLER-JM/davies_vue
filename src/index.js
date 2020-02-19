import './style.css';
import speak from './MyComponent';
function component() {
  const elem = document.createElement('div');
  const btn = document.createElement('button');

  btn.innerHTML = 'Click me for a message in the console!';
  btn.onclick = speak;

  elem.innerHTML = 'Hello Davies';
  // elem.setAttribute('id', 'app');
  elem.classList.add('title');
  elem.appendChild(btn);

  return elem
}

document.body.appendChild(component());
