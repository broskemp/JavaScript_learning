

'use strict'
const tvform = document.querySelector('form')
const main = document.createElement('div');
main.id = 'results';
document.body.appendChild(main);
tvform.addEventListener('submit', async function(evt){
  evt.preventDefault();
  const code = document.querySelector('input[name=q]').value;
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${code}`);
    const jsonData = await response.json();
    console.log(jsonData);
    for (let i=0;i<jsonData.length;i++){
      const h2 = document.createElement('h2');
      h2.innerHTML = jsonData[i].show.name;
      const a = document.createElement('a');
      a.href = jsonData[i].show.url;
      a.target ='_blank';
      a.innerHTML = jsonData[i].show.url;
      const img = document.createElement('img');
      img.src = jsonData[i].show.image?.medium || 'https://via.placeholder.com/210x295?text=Not%20Found';
      img.alt = jsonData[i].show.name;
      const div = document.createElement('div');
      div.innerHTML = jsonData[i].show.summary
      const article = document.createElement('article');
      article.appendChild(h2);
      article.appendChild(a);
      article.appendChild(img);
      article.appendChild(div);
      main.appendChild(article);
    }
  } catch (error) {
    console.log(error.message);
  }
})

// name in h2
// url in a
// medium image with img
// if there's no image, then do ? operator (check assignment)
// summary in div
// elements to article