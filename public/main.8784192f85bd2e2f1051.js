(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_sendSearchDatas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/sendSearchDatas */ "./src/scripts/sendSearchDatas.js");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_2__);

 // Import plugins individually

/*
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
*/



/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scripts/Carousel/index.js":
/*!***************************************!*\
  !*** ./src/scripts/Carousel/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buildCarousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../buildCarousel */ "./src/scripts/buildCarousel.js");
/* harmony import */ var _getMarsRoverInfos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getMarsRoverInfos */ "./src/scripts/getMarsRoverInfos.js");



var Carousel = function Carousel(sol, page) {
  var carouselContainer = document.getElementById('carouselMarsControls');
  var formSearcher = document.getElementById('formSearchMarsInfos').querySelector('#inputNumber');
  formSearcher.value = sol;
  Object(_getMarsRoverInfos__WEBPACK_IMPORTED_MODULE_1__["default"])(sol, page).then(function (res) {
    var _buildCarousel = Object(_buildCarousel__WEBPACK_IMPORTED_MODULE_0__["default"])(res),
        slides = _buildCarousel.slides,
        indexesSlides = _buildCarousel.indexesSlides;

    construct(slides, indexesSlides);
  });

  function construct(slides, indexesSlides) {
    var dotNav = '';
    indexesSlides.map(function (dot) {
      dotNav += "<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"".concat(dot, "\" class=\"").concat(dot == 0 ? 'active' : '', "\"></li>");
    });
    var bodyCarousel = "\n    <div class=\"carousel-inner\">\n      ".concat(slides, "\n      </div>\n      <ol class=\"carousel-indicators\">\n        ").concat(dotNav, "\n      </ol>\n      <a class=\"carousel-control-prev\" href=\"#carouselMarsControls\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Anterior</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselMarsControls\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Pr\xF3ximo</span>\n    </a>\n      ");
    carouselContainer.innerHTML = bodyCarousel;
  } // console.log(slides);
  // 

};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./src/scripts/SlideItem/index.js":
/*!****************************************!*\
  !*** ./src/scripts/SlideItem/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SlideItem = function SlideItem(photoId, nameRover, earthDate, urlImg, index) {
  var slideContainer = "<div class=\"carousel-item ".concat(index === 0 ? 'active' : '', "\" id='photo").concat(photoId, "'>\n      <img class=\"d-block w-100\" src=\"").concat(urlImg, "\" alt=\"Foto tirada de Marte por ").concat(nameRover, " no dia ").concat(earthDate, " \">\n      <div class=\"carousel-caption d-none d-md-block bg-dark\">\n        <h5>Nome do Hover: ").concat(nameRover, "</h5>\n        <p>Dia na Terra: ").concat(earthDate, "</p>\n      </div>\n    </div>\n  ");
  return slideContainer;
};

/* harmony default export */ __webpack_exports__["default"] = (SlideItem);

/***/ }),

/***/ "./src/scripts/buildCarousel.js":
/*!**************************************!*\
  !*** ./src/scripts/buildCarousel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SlideItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SlideItem */ "./src/scripts/SlideItem/index.js");


var buildCarousel = function buildCarousel(data) {
  var slides = '';
  var indexesSlides = [];
  data.map(function (item, index) {
    slides += Object(_SlideItem__WEBPACK_IMPORTED_MODULE_0__["default"])(item.id, item.rover.name, item.earth_date, item.img_src, index);
    indexesSlides.push(index);
  });
  return {
    slides: slides,
    indexesSlides: indexesSlides
  };
};

/* harmony default export */ __webpack_exports__["default"] = (buildCarousel);

/***/ }),

/***/ "./src/scripts/getMarsRoverInfos.js":
/*!******************************************!*\
  !*** ./src/scripts/getMarsRoverInfos.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getMarsRoverInfos = function getMarsRoverInfos(sol, page) {
  var URL_API_NASA = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=".concat(sol).concat(page ? '&page=' + page : '', "&api_key=MrfBZ9661U9AdWtFle3BvcuIdWBcwcOexiRa6zFw");
  var dataset = fetch(URL_API_NASA).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res.photos;
  })["catch"](function (err) {
    return err;
  });
  return dataset;
};

/* harmony default export */ __webpack_exports__["default"] = (getMarsRoverInfos);

/***/ }),

/***/ "./src/scripts/sendSearchDatas.js":
/*!****************************************!*\
  !*** ./src/scripts/sendSearchDatas.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel */ "./src/scripts/Carousel/index.js");

var carouselContainer = document.getElementById('carouselMarsControls');
var formSearcher = document.getElementById('formSearchMarsInfos');
var inputSearchValue = formSearcher.querySelector('#inputNumber').value;
var btnSearch = formSearcher.querySelector('#btnLoad');
var pageCurrent = 1;
btnSearch.addEventListener('click', function (event) {
  event.preventDefault();

  if (!btnSearch.classList.contains('is-loading')) {
    btnSearch.classList.add('is-loading');
    btnSearch.setAttribute('disabled', true);
    Object(_Carousel__WEBPACK_IMPORTED_MODULE_0__["default"])(inputSearchValue, pageCurrent);
  }
});

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./src/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9DYXJvdXNlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9TbGlkZUl0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYnVpbGRDYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nZXRNYXJzUm92ZXJJbmZvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zZW5kU2VhcmNoRGF0YXMuanMiXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJzb2wiLCJwYWdlIiwiY2Fyb3VzZWxDb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9ybVNlYXJjaGVyIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiZ2V0TWFyc1JvdmVySW5mb3MiLCJ0aGVuIiwicmVzIiwiYnVpbGRDYXJvdXNlbCIsInNsaWRlcyIsImluZGV4ZXNTbGlkZXMiLCJjb25zdHJ1Y3QiLCJkb3ROYXYiLCJtYXAiLCJkb3QiLCJib2R5Q2Fyb3VzZWwiLCJpbm5lckhUTUwiLCJTbGlkZUl0ZW0iLCJwaG90b0lkIiwibmFtZVJvdmVyIiwiZWFydGhEYXRlIiwidXJsSW1nIiwiaW5kZXgiLCJzbGlkZUNvbnRhaW5lciIsImRhdGEiLCJpdGVtIiwiaWQiLCJyb3ZlciIsIm5hbWUiLCJlYXJ0aF9kYXRlIiwiaW1nX3NyYyIsInB1c2giLCJVUkxfQVBJX05BU0EiLCJkYXRhc2V0IiwiZmV0Y2giLCJqc29uIiwicGhvdG9zIiwiZXJyIiwiaW5wdXRTZWFyY2hWYWx1ZSIsImJ0blNlYXJjaCIsInBhZ2VDdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInNldEF0dHJpYnV0ZSJdLCJt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LEVBQW1CRSxXQUFuQixDQUFSO0FBQ0Q7QUFFRixDQVRELEUiLCJmaWxlIjoibWFpbi44Nzg0MTkyZjg1YmQyZTJmMTA1MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCBzZW5kU2VhcmNoRGF0YXMgZnJvbSAnLi9zY3JpcHRzL3NlbmRTZWFyY2hEYXRhcyc7XG5cblxuXG5cblxuLy8gSW1wb3J0IHBsdWdpbnMgaW5kaXZpZHVhbGx5XG4vKlxuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC91dGlsJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvZHJvcGRvd24nO1xuKi9cblxuaW1wb3J0ICcuL21haW4uc2Nzcyc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgYnVpbGRDYXJvdXNlbCBmcm9tIFwiLi4vYnVpbGRDYXJvdXNlbFwiO1xuaW1wb3J0IGdldE1hcnNSb3ZlckluZm9zIGZyb20gXCIuLi9nZXRNYXJzUm92ZXJJbmZvc1wiO1xuXG5jb25zdCBDYXJvdXNlbCA9IChzb2wsIHBhZ2UpID0+IHtcbiAgY29uc3QgY2Fyb3VzZWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fyb3VzZWxNYXJzQ29udHJvbHMnKTtcbiAgY29uc3QgZm9ybVNlYXJjaGVyID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtU2VhcmNoTWFyc0luZm9zJykucXVlcnlTZWxlY3RvcignI2lucHV0TnVtYmVyJyk7XG4gIGZvcm1TZWFyY2hlci52YWx1ZSA9IHNvbDtcbiAgXG4gICBnZXRNYXJzUm92ZXJJbmZvcyhzb2wsIHBhZ2UpLnRoZW4oKHJlcyk9PiB7XG4gICAgdmFyIHsgc2xpZGVzLCAgaW5kZXhlc1NsaWRlcyB9ID0gYnVpbGRDYXJvdXNlbChyZXMpO1xuICAgIGNvbnN0cnVjdChzbGlkZXMsIGluZGV4ZXNTbGlkZXMpXG4gICB9KTtcbiAgXG4gXG4gIGZ1bmN0aW9uIGNvbnN0cnVjdChzbGlkZXMsIGluZGV4ZXNTbGlkZXMpIHtcbiAgICBsZXQgZG90TmF2ID0gJyc7XG4gICAgaW5kZXhlc1NsaWRlcy5tYXAoKGRvdCkgPT4ge1xuICAgICAgZG90TmF2ICs9IGA8bGkgZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGRhdGEtc2xpZGUtdG89XCIke2RvdH1cIiBjbGFzcz1cIiR7ZG90ID09IDAgPyAnYWN0aXZlJzogJyd9XCI+PC9saT5gXG4gICAgfSk7XG4gICAgY29uc3QgYm9keUNhcm91c2VsID0gYFxuICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPlxuICAgICAgJHtzbGlkZXN9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj5cbiAgICAgICAgJHtkb3ROYXZ9XG4gICAgICA8L29sPlxuICAgICAgPGEgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2Nhcm91c2VsTWFyc0NvbnRyb2xzXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJwcmV2XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+QW50ZXJpb3I8L3NwYW4+XG4gICAgPC9hPlxuICAgIDxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjYXJvdXNlbE1hcnNDb250cm9sc1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByw7N4aW1vPC9zcGFuPlxuICAgIDwvYT5cbiAgICAgIGA7XG5cbiAgICBjYXJvdXNlbENvbnRhaW5lci5pbm5lckhUTUwgPSBib2R5Q2Fyb3VzZWw7XG4gIH1cbiAgICBcbiAgLy8gY29uc29sZS5sb2coc2xpZGVzKTtcbiAgLy8gXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiIsImNvbnN0IFNsaWRlSXRlbSA9ICggcGhvdG9JZCwgbmFtZVJvdmVyLCBlYXJ0aERhdGUsIHVybEltZywgaW5kZXggKSA9PiB7XG4gIGNvbnN0IHNsaWRlQ29udGFpbmVyID0gYDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtICR7aW5kZXggPT09IDAgPyAnYWN0aXZlJyA6ICcnfVwiIGlkPSdwaG90byR7cGhvdG9JZH0nPlxuICAgICAgPGltZyBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIiBzcmM9XCIke3VybEltZ31cIiBhbHQ9XCJGb3RvIHRpcmFkYSBkZSBNYXJ0ZSBwb3IgJHtuYW1lUm92ZXJ9IG5vIGRpYSAke2VhcnRoRGF0ZX0gXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9jayBiZy1kYXJrXCI+XG4gICAgICAgIDxoNT5Ob21lIGRvIEhvdmVyOiAke25hbWVSb3Zlcn08L2g1PlxuICAgICAgICA8cD5EaWEgbmEgVGVycmE6ICR7ZWFydGhEYXRlfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuICByZXR1cm4gc2xpZGVDb250YWluZXI7XG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVJdGVtOyIsImltcG9ydCBTbGlkZUl0ZW0gZnJvbSAnLi9TbGlkZUl0ZW0nO1xuXG5jb25zdCBidWlsZENhcm91c2VsID0gKGRhdGEpID0+IHtcbiAgbGV0IHNsaWRlcyA9ICcnO1xuICBsZXQgaW5kZXhlc1NsaWRlcyA9IFtdO1xuICBkYXRhLm1hcCggKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgc2xpZGVzICs9IFNsaWRlSXRlbShpdGVtLmlkLCBpdGVtLnJvdmVyLm5hbWUsIGl0ZW0uZWFydGhfZGF0ZSwgaXRlbS5pbWdfc3JjLCBpbmRleCk7XG4gICAgaW5kZXhlc1NsaWRlcy5wdXNoKGluZGV4KTtcbiAgfSk7XG4gIHJldHVybiB7IHNsaWRlcyAsIGluZGV4ZXNTbGlkZXMgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRDYXJvdXNlbDsiLCJjb25zdCBnZXRNYXJzUm92ZXJJbmZvcyA9IChzb2wsIHBhZ2UpID0+IHtcbiAgY29uc3QgVVJMX0FQSV9OQVNBID0gYGh0dHBzOi8vYXBpLm5hc2EuZ292L21hcnMtcGhvdG9zL2FwaS92MS9yb3ZlcnMvY3VyaW9zaXR5L3Bob3Rvcz9zb2w9JHtzb2x9JHtwYWdlID8gJyZwYWdlPScrIHBhZ2U6ICcnfSZhcGlfa2V5PU1yZkJaOTY2MVU5QWRXdEZsZTNCdmN1SWRXQmN3Y09leGlSYTZ6RndgO1xuICB2YXIgZGF0YXNldCA9ZmV0Y2goVVJMX0FQSV9OQVNBKVxuICAudGhlbihyZXM9PnJlcy5qc29uKCkpXG4gIC50aGVuKHJlcz0+cmVzLnBob3RvcylcbiAgLmNhdGNoKGVycj0+ZXJyKTtcbiAgcmV0dXJuIGRhdGFzZXQ7XG59IFxuXG5leHBvcnQgZGVmYXVsdCBnZXRNYXJzUm92ZXJJbmZvczsiLCJpbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbCc7XG5cbmNvbnN0IGNhcm91c2VsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhcm91c2VsTWFyc0NvbnRyb2xzJyk7XG5jb25zdCBmb3JtU2VhcmNoZXIgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1TZWFyY2hNYXJzSW5mb3MnKTtcbmNvbnN0IGlucHV0U2VhcmNoVmFsdWUgPSBmb3JtU2VhcmNoZXIucXVlcnlTZWxlY3RvcignI2lucHV0TnVtYmVyJykudmFsdWU7XG5jb25zdCBidG5TZWFyY2ggPSBmb3JtU2VhcmNoZXIucXVlcnlTZWxlY3RvcignI2J0bkxvYWQnKTtcblxudmFyIHBhZ2VDdXJyZW50ID0gMTtcblxuXG5idG5TZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgaWYoIWJ0blNlYXJjaC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWxvYWRpbmcnKSkge1xuICAgIGJ0blNlYXJjaC5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nJylcbiAgICBidG5TZWFyY2guc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpXG4gICAgQ2Fyb3VzZWwoaW5wdXRTZWFyY2hWYWx1ZSwgcGFnZUN1cnJlbnQpXG4gIH0gXG5cbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=