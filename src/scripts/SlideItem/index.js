const SlideItem = ( photoId, nameRover, earthDate, urlImg, index ) => {
  const slideContainer = `<div class="carousel-item ${index === 0 ? 'active' : ''}" id='photo${photoId}'>
      <img class="d-block w-100" src="${urlImg}" alt="Foto tirada de Marte por ${nameRover} no dia ${earthDate} ">
      <div class="carousel-caption d-none d-md-block bg-dark">
        <h5>Nome do Hover: ${nameRover}</h5>
        <p>Dia na Terra: ${earthDate}</p>
      </div>
    </div>
  `;
  return slideContainer;
};



export default SlideItem;