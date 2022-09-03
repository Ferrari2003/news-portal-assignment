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


loadNews();