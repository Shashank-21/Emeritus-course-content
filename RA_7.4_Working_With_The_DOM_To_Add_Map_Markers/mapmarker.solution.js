function createMapMarker() {
  // TODO: add your own access token
  mapboxgl.accessToken = "Access token retreived from Mapbox website";

  let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-71.091542, 42.358862],
    zoom: 12,
  });

  // TODO: add a marker to the map
  const coordinates = [-71.091542, 42.358862];
  const el = document.createElement("div");
  el.className = "marker";
  new mapboxgl.Marker(el).setLngLat(coordinates).addTo(map);
}

createMapMarker();
