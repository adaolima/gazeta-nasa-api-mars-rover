const getMarsRoverInfos = (sol, page) => {
  const URL_API_NASA = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}${
    page ? "&page=" + page : ""
  }&api_key=MrfBZ9661U9AdWtFle3BvcuIdWBcwcOexiRa6zFw`;
  var dataset = fetch(URL_API_NASA)
    .then(res => res.json())
    .then(res => res.photos)
    .catch(err => err);
  console.log(dataset);
  return dataset;
};

export default getMarsRoverInfos;
