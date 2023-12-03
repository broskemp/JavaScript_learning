'use strict'

const main = document.createElement('div');
main.id = 'results';
document.body.appendChild(main);
const jokeform = document.querySelector('form');
jokeform.addEventListener('submit', async function(evt){
  evt.preventDefault();
  const code = document.querySelector('input[name=q]').value;
  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${code}`);
    const jsonData = await response.json();
    console.log(jsonData);
    for (let joke of jsonData.result){
      let article = document.createElement('article');
      let content = document.createElement('p');
      content.innerText = joke.value;
      article.appendChild(content);
      main.appendChild(article);
      }
    } catch (error) {
    console.log(error.message);
  }})
