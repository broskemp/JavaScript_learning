const ul = document.querySelector('#target');
const list1 = document.createElement('li');
list1.textContent = 'First item';
const list2 = document.createElement('li');
list2.textContent = 'Second item';
const list3 = document.createElement('li');
list3.textContent = 'Third item';

ul.appendChild(list1);
ul.appendChild(list2);
ul.appendChild(list3);

document.getElementsByTagName('li')[1].className += "my-item";

