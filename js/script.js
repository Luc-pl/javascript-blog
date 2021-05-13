{const titleClickHandler = function(event){
    event.preventDefault();  
    console.log('Link was clicked!');
    
    const clickedElement = this;

    /* remove class 'active' from all article links */
    const activeLinks = document.querySelectorAll('.titles a.active'); 

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }
    /* add class 'active' to the clicked link */
    console.log('clickedElement:', clickedElement);
   
    clickedElement.classList.add('active');


    /* remove class 'active' from all articles*/
    const activeArticles = document.querySelectorAll('article');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }
    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute("href");
    console.log(articleSelector);

    /* find the correct article using the selecetor (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);

    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(customSelector = ''){

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  function clearMessages(){
    document.getElementById('messages').innerHTML = '';
  }

  /* for each article */
  const articles = document.querySelector(optArticleSelector);

  let html = '';

  for(let article of articles){
  }
  /* get the article id */
    const articleId = article.getAttribute('id');

    /* find the title element */
    
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    const linkHTML = templates.articleLink(linkHTMLData);
    console.log(linkHTML);

    /* insert link into titleList */

}

generateTitleLinks();
}