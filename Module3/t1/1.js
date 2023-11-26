const ul = document.querySelector('#target')
const html =
    `<li>First item</li>
    <li>Second item</li>
    <li>Third item</li>`;
ul.innerHTML = html;

document.getElementById('target').className += "my-list";