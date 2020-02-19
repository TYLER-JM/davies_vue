import './style.css';

// import Vue from 'vue';
// import Component from './MyComponent';
function component() {
  const elem = document.createElement('div');


  elem.innerHTML = 'Hello Davies';
  // elem.setAttribute('id', 'app');
  elem.classList.add('title');

  return elem
}

// new Vue({
//   el: '#app'
// })

document.body.appendChild(component());
