import Carousel from './Carousel';

const carouselContainer = document.getElementById('carouselMarsControls');
const formSearcher =  document.getElementById('formSearchMarsInfos');
const inputSearchValue = formSearcher.querySelector('#inputNumber').value;
const btnSearch = formSearcher.querySelector('#btnLoad');

var pageCurrent = 1;


btnSearch.addEventListener('click', function(event){
  event.preventDefault();

  if(!btnSearch.classList.contains('is-loading')) {
    btnSearch.classList.add('is-loading')
    btnSearch.setAttribute('disabled', true)
    Carousel(inputSearchValue, pageCurrent)
  } 

});