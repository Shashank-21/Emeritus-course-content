function createMapMarker() {
  // TODO: add your own access token
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2hhc2hhbmstMjEiLCJhIjoiY2xvbjJ2MWRtMm95ajJwb2l1amFkOGFhMSJ9.hQ0i27hFs1kdNaI-1SiIMw";

  let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-71.091542, 42.358862],
    zoom: 12,
  });

  // TODO: add a marker to the map
}

createMapMarker();
