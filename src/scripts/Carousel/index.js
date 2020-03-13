import buildCarousel from "../buildCarousel";
import getMarsRoverInfos from "../getMarsRoverInfos";

const Carousel = (sol, page) => {
  const carouselContainer = document.getElementById("carouselMarsControls");
  const formSearcher = document
    .getElementById("formSearchMarsInfos")
    .querySelector("#inputNumber");
  formSearcher.value = sol;

  getMarsRoverInfos(sol, page)
    .then(res => {
      return buildCarousel(res);
    })
    .then(({ slides }) => {
      carouselContainer.innerHTML = buildBody(slides);
      // console.log(slides);
    });

  function buildBody(slides) {
    const bodyCarousel = `
    <div class="carousel-inner">
      ${slides}
      </div>
      <a class="carousel-control-prev" href="#carouselMarsControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Anterior</span>
    </a>
    <a class="carousel-control-next" href="#carouselMarsControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Próximo</span>
    </a>
      `;

    return bodyCarousel;
  }
};

export default Carousel;
