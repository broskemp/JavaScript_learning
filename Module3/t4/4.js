'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const select = document.querySelector('#target');
for (let i = 0; i < students.length; i++) {
  let name_item = document.createElement('option');
  name_item.textContent = students[i].name;
  name_item.value = students[i].id;
  select.appendChild(name_item);
}