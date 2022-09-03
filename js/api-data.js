const loadNews = () =>{
   fetch(`https://openapi.programming-hero.com/api/news/categories`)
   .then(Response => Response.json())
   .then(data => displayNews(data.data.news_category))
   .catch(erroe => console(erroe))
}

const displayNews= categories => {
  const newsConatainer =document.getElementById('news-container');
  categories.forEach(categorie => {
    const newsDiv =document.createElement('button');
    newsDiv.classList.add('btn');
    newsDiv.innerText =`${categorie.category_name}`
    newsConatainer.appendChild(newsDiv);
  });
   
}


const loadCardPhotos = () =>{
   fetch(`https://openapi.programming-hero.com/api/news/category/01`)
   .then(Response => Response.json())
   .then(data => dispalyCard(data.data))
}

const dispalyCard = cards =>{
   const cardContainer =document.getElementById('news_details')
   cards.forEach(cards =>{
      const cardDiv =document.createElement('div');
      cardDiv.classList.add('col')
      cardDiv.innerHTML=`
       <div class="card h-100">
                <img src="${cards.thumbnail_url}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${cards.title}</h5>
                  <p class="card-text">${cards.details}</p>
                 <div class=''>
                 <img src="${cards.author.img}" class="images" alt="...">
                 <p>${cards.author.name}</p>
                 <p>${cards.author.published_date}</p>
                 </div>
               
                </div>
      `;
      cardContainer.appendChild(cardDiv)

   })
}

loadCardPhotos();
loadNews();