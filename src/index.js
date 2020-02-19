import './style.css';

function component() {
  const elem = document.createElement('div');


  // elem.innerHTML = 'Hello Davies';
  elem.setAttribute('id', 'app');
  elem.classList.add('title');

  return elem
}


document.body.appendChild(component());
