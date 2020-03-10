import buildCarousel from "../buildCarousel";
import getMarsRoverInfos from "../getMarsRoverInfos";

const Carousel = (sol, page) => {
  const carouselContainer = document.getElementById('carouselMarsControls');
  const formSearcher =  document.getElementById('formSearchMarsInfos').querySelector('#inputNumber');
  formSearcher.value = sol;
  
   getMarsRoverInfos(sol, page).then((res)=> {
    var { slides,  indexesSlides } = buildCarousel(res);
    construct(slides, indexesSlides)
   });
  
 
  function construct(slides, indexesSlides) {
    let dotNav = '';
    indexesSlides.map((dot) => {
      dotNav += `<li data-target="#carouselExampleIndicators" data-slide-to="${dot}" class="${dot == 0 ? 'active': ''}"></li>`
    });
    const bodyCarousel = `
    <div class="carousel-inner">
      ${slides}
      </div>
      <ol class="carousel-indicators">
        ${dotNav}
      </ol>
      <a class="carousel-control-prev" href="#carouselMarsControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Anterior</span>
    </a>
    <a class="carousel-control-next" href="#carouselMarsControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Próximo</span>
    </a>
      `;

    carouselContainer.innerHTML = bodyCarousel;
  }
    
  // console.log(slides);
  // 
};

export default Carousel;
