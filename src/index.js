import "bootstrap";
// import sendSearchDatas from "./scripts/sendSearchDatas";
import getMarsRoverInfos from "./scripts/getMarsRoverInfos";
import buildCarousel from "./scripts/buildCarousel";
import Carousel from "./scripts/Carousel";
console.log("Carregando scripts");

// var inputSearchValue = document.getElementById("inputNumber").value;
var pageCurrent = 1;
const callCarousel = event => {
  event.preventDefault();
  var formSearcher = event.target.parentNode.parentNode;
  var inputSearchValue = formSearcher.querySelector("#inputNumber").value;
  const btnSearch = event.target.parentNode;
  var carouselMarsControls = formSearcher.parentNode.parentNode.querySelector(
    ".carousel"
  );
  if (!btnSearch.classList.contains("is-loading")) {
    Carousel(inputSearchValue, pageCurrent);

    btnSearch.classList.add("is-loading");
    btnSearch.setAttribute("disabled", true);
    console.log(carouselMarsControls);
  }
  console.log(inputSearchValue);
  console.log(pageCurrent);
};

document.getElementById("btnLoad").addEventListener("click", callCarousel);

// Import plugins individually
/*
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
*/

import "./main.scss";
