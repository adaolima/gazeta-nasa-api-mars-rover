import SlideItem from './SlideItem';

const buildCarousel = (data) => {
  let slides = '';
  let indexesSlides = [];
  data.map( (item, index) => {
    slides += SlideItem(item.id, item.rover.name, item.earth_date, item.img_src, index);
    indexesSlides.push(index);
  });
  return { slides , indexesSlides };

};

export default buildCarousel;