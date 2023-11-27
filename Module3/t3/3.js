'use strict';
const names = ['John', 'Paul', 'Jones'];
const ul = document.querySelector('#target');

for (let i = 0; i < names.length; i++) {
  let name_item = document.createElement('li');
  name_item.innerHTML = names[i];
  ul.appendChild(name_item);
}
