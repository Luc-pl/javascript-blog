'use strict';
/* eslint-disable no-undef */
/* eslint-disable no-inner-declarations */
{
  const titleClickHandler = function(event){
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
  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author',
    optTagsListSelector = '.tags.list',
    optCloudClassCount = 5,
    optCloudClassPrefix = '.tag-size';

  function generateTitleLinks(customSelector = '') {
    console.log('Wykonanie funkcji generateTitleLinks');

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);

    titleList.innerHTML = '';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);

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

  //function calculateTagsParams///////////////////////////

  function calculateTagsParams(tags){
    const params = {
      min:999999,
      max: 0
    };
    console.log(params);

    for(let tag in tags){
      console.log(tag + ' is used ' + tags[tag] + 'times');
      if(tags[tag] > params.max){
        params.max = tags[tag];
      }
      if(tags[tag] < params.min){
        params.min = tags[tag];
      }
    }
    return params;
  }

  //function calculateTagClass//////////////////////////////////
  function calculateTagClass(count, params){

  }

  //function generateTags//////////////////////////////////
  function generateTags(){
    console.log('Wykonanie funkcji generateTags');

    /* [NEW] create a new variable allTags with an empty object*/
    let allTags = {};

    /* find all articles */
    const articles = document.querySelectorAll('.post');
    
    /* START LOOP: for every article: */
    for(let article of articles){
      /* find tags wrapper */
      const tagsWrapper = article.querySelector(optArticleTagsSelector);
    
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
        const linkHTML = '<li><a href="#tag-' + '">' + tag + '</a></li>';

        console.log(linkHTML);
    
        /* add generated code to html variable */
        html += linkHTML + ' ';

        /* [NEW] check if this link is NOT already in allTags */
        if(!allTags[tag]){
          /* [NEW] add generated code to allTags array */
          allTags[tag] = 1;
        } else {
          allTags[tag]++; /*operator inkrementacji*/
        }
      }
    
      /* END LOOP: for each tag */

      console.log('END LOOP: for each tag');
    
      /* insert HTML of all the links into the tags wrapper */

      console.log('insert HTML');

      tagsWrapper.innerHTML = html;
    
      /* END LOOP: for every article: */

      console.log('END LOOP: for every article');

      /*[NEW] find list of tags in right column */
      const tagList = document.querySelector('.tags');

      const tagsParams = calculateTagsParams(allTags);
      console.log('tagsParams:', tagsParams); 

      /* [NEW] add html from allTags to tagList 
      tagList.innerHTML = allTags.join(' ');
      console.log(allTags);*/  

      /* [NEW] create variable for all links HTML code */
      let allTagsHTML = '';

      /* [NEW] START LOOP: for each tag in allTags: */
      for(let tag in allTags){
        /* [NEW] generate code of a link and add it to allTagsHTML */
        /*allTagsHTML += tag + ' (' + allTags[tag] + ')';*/
        allTagsHTML += '<li><a href="#tag-'+ tag +'">'+ tag +'</a>(' + allTags[tag] + ')</li>';
        
        const tagLinkHTML = '<li>' + calculateTagClass(allTags[tag], tagsParams) + </li>;
        console.log('tagLinkHTML:', tagLinkHTML);
      }
      /* [NEW] END LOOP: for each tag in allTags: */
      
      /* [NEW] add HTML from allTagsHTML to tagList */
      tagList.innerHTML = allTagsHTML;
    }  
  }
  generateTags();  

  //function tagClickHandler

  function tagClickHandler(event){
    /* prevent default action for this event */
    event.preventDefault();
    console.log('Tag was clicked!');

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    console.log(clickedElement);

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log(href);
    
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    console.log(tag);
    
    /* find all tag links with class active */
    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log(activeTags);
    
    /* START LOOP: for each active tag link */

    let html = '';
    console.log(html);

    for(let activeTag of activeTags){

      /* remove class active */
      activeTag.classList.remove('active');
    }
    /* END LOOP: for each active tag link */

    /* find all tag links with "href" attribute equal to the "href" constant */
    const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    
    /* START LOOP: for each found tag link */
    
    for(let tagLink of tagLinks){
      /* add class active */
      tagLink.classList.add('active');

      console.log('TagLinks is ', tagLinks);
    }

    /* END LOOP: for each found tag link */

    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }

  function addClickListenersToTags(){
    /* find all links to tags */
    const tagLinks = document.querySelectorAll('a[href^="tag-"]');
    /* START LOOP: for each link */
    for(let tagLink of tagLinks){
      /* add tagClickHandler as event listener for that link */
      tagLink.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
    }
  }

  addClickListenersToTags();

  // eslint-disable-next-line indent
  //function generateAuthors////////////////////////////////////

  function generateAuthors(){
    console.log('Wykonanie funkcji generateAuthors');

    const articles = document.querySelectorAll(optArticleSelector);

    for(let article of articles){
      const authorWrapper = article.querySelector(optArticleAuthorSelector);

      let html = '';

      console.log(html);

      const articleAuthor = article.getAttribute('data-author');

      const linkHTML = '<li><a href="#author-'+ articleAuthor +'"><span>' + articleAuthor + '</a></li>';

      console.log(linkHTML);

      html = html + linkHTML;

      authorWrapper.innerHTML = html;
      console.log(authorWrapper.innerHTML);
    }

  }
  generateAuthors();

  const authorClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    const href = clickedElement.getAttribute('href');
    const author = href.replace('#author-','');
    const activeTagLinks = document.querySelectorAll('a[href^="#author-"]');
    
    for(let activeTag of activeTagLinks){
      activeTag.classList.remove('active');
    }
    const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
    for (let tag of tagLinks) {
      tag.classList.add('active');
    }
    generateTitleLinks('[data-author="' + author + '"]');
  };

  const addClickListenersToAuthors = function () {
    const tagLinks = document.querySelectorAll('a[href^="#author-"]');
    for (let tagLink of tagLinks) {
      tagLink.addEventListener('click', authorClickHandler);
    }
  };
  addClickListenersToAuthors();
}