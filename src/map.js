let viz;
let account = {
  username: 'cartovl',
  apiKey: 'default_public',
  dataset: 'madrid_listings'
};

function initMapboxGL () {
  map = new mapboxgl.Map({
    container: 'map',
    style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
    center: [-3.7038, 40.4168],
    zoom: 11,
    scrollZoom: false,
    dragRotate: false,
    touchZoomRotate: false
  });

  const nav = new mapboxgl.NavigationControl({
    showCompass: false
  });
  map.addControl(nav, 'top-left');
}

function loadMap (categoriesCb) {
  const { username, apiKey, dataset } = account;
  carto.setDefaultAuth({
    user: username,
    apiKey: apiKey
  });

  const source = new carto.source.Dataset(dataset);
  viz = new carto.Viz(`
    @roomType: $room_type,
    width: 8,
    color: opacity(rgb(0,0,255), 0.25),
    strokeWidth: 0,
    @categories: viewportHistogram($neighbourhood_group, 1, 12)
  `);

  layer = new carto.Layer(dataset, source, viz);
  layer.addTo(map, 'watername_ocean');
  layer.on('updated', () => {
    const categories = layer.viz.variables.categories.value;
    categoriesCb && categoriesCb(categories);
  });
}
