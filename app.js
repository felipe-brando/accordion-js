let app = {

  init: function() {
  
    // on recupère les titres
    const titleElement = document.querySelectorAll('.accordion__title');
    console.log(titleElement);
  
    // on boucle pour ecouter leurs clics
    for (let titleIndex = 0 ; titleIndex < titleElement.length; titleIndex++) {
    //console.log(titleIndex);
    titleElement[titleIndex].addEventListener('click', app.handleTitleClick);
    }

 },

 handleTitleClick: function (event) {
   
  event.preventDefault();
  const currentClick = event.currentTarget;
  //console.log(currentClick)
  const arrows = document.querySelectorAll('.accordion__arrow');
  for (let arrowIndex = 0 ; arrowIndex < arrows.length; arrowIndex++) {
    arrows[arrowIndex].parentNode.classList.remove('open');
    arrows[arrowIndex].classList.remove('arrow-open');
  }
  currentClick.classList.add('open');
  const currentArrow = currentClick.querySelector('.accordion__arrow');
  currentArrow.classList.add('arrow-open');

  
}
  

}

document.addEventListener('DOMContentLoaded', app.init);