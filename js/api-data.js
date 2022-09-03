const loadNews = () =>{
   fetch(`https://openapi.programming-hero.com/api/news/categories`)
   .then(Response => Response.json())
   .then(data => displayNews(data.data.news_category))
}

const displayNews= categories => {
  const newsConatainer =document.getElementById('news-container');
  categories.forEach(categories => {
      
  });
   
}


loadNews();