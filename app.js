/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/
//Define Global Variables
const startingTime = performance.now();
 let navBar = document.querySelector('ul');
let sector = document.querySelectorAll('section');
//End Global Variables

//Begin Main Functions
// build the nav
for(let i = 1; i <= sector.length; i++)
{
  let navList = document.createElement('li');
  navList.classList.add("sec"+i);
  navBar.appendChild(navList);
  const textOfList = document.createTextNode('Sec' + i);
  // Scroll to anchor ID using scrollTO event
  const anchor = document.createElement('a');
  //let ids = sector[i-1].id;
  //anchor.setAttribute('href','#'+ids);
  navList.appendChild(anchor);
  anchor.appendChild(textOfList);
  anchor.addEventListener('click',function(){
  sector[i-1].scrollIntoView({behavior: "smooth"});
})
  //navList.appendChild(textOfList);
  navList.setAttribute('style','color:#e7e7f1;font-size: 3.5em;margin:0 10px;float:left;');
}
/*
 * End Main Functions
 * Begin Events
 * Scroll to section on link click
*  Set sections as active
*/
for( let i = 0; i < sector.length; i++){
  window.addEventListener('scroll',function(){
    //Add class 'active' to section when near top of viewport
    if(sector[i].getBoundingClientRect().top < window.innerHeight/2){
    sector[i].setAttribute('class','your-active-class');
    document.querySelector(".sec"+ (i+1)).classList.add("active");
    //remove class 'active' to section when near top of viewport
    sector[i+1].removeAttribute('class','your-active-class');
    document.querySelector(".sec"+(i+2)).classList.remove("active");
  }//remove class 'active' to section when near top of viewport
   if(sector[i].getBoundingClientRect().bottom < window.innerHeight/2){
      sector[i].removeAttribute('class','your-active-class');
      document.querySelector(".sec"+(i+1)).classList.remove("active");
    }
  });
}
// Build menu
const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
