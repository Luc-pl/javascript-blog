/* eslint-disable no-inner-declarations */
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

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
  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);

  /* find the correct article using the selecetor (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
};
  
const links = document.querySelectorAll('.titles a');
  
for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

// function generateTitleLinks
// eslint-disable-next-line no-inner-declarations
function generateTitleLinks() {
  console.log('Wykonanie funkcji generateTitleLinks');

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);

  titleList.innerHTML = '';

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);

  let html = '';

  for(let article of articles){

    /* get the article id */
    const articleId = article.getAttribute('id');

    /* find the title element */
    
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);

    /* insert link into titleList */
    html = html + linkHTML;
  }    
  
  titleList.innerHTML = html; 

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

//function generateTags//////////////////////////////////

function generateTags(){
  console.log('Wykonanie funkcji generateTags');
  /* find all articles */
  const articles = document.querySelectorAll('.post');
  
  /* START LOOP: for every article: */
  for(let article of articles){

    /* find tags wrapper */
    const tagWrapper = article.querySelector(optArticleTagsSelector);
  
    /* make html variable with empty string */
    let html = '';
  
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');

    console.log(articleTags);
  
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log('Wywołanie funkcji split');
  
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
      
      /* generate HTML of the link */
  
      /* add generated code to html variable */

    }
  
    /* END LOOP: for each tag */
  
    /* insert HTML of all the links into the tags wrapper */
  
    /* END LOOP: for every article: */

  }
}
  
generateTags();
}