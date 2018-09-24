console.log('main.js');

function onLoad () {
  initMapboxGL();
  loadMap(onCategoriesChanged);
  handleCategoriesSelected();
  handleLayerSelector();
}

function onCategoriesChanged (categories) {
  const categoriesWidget = document.getElementById('neighbourhoods');
  const data = categories.map((category) => {
    const { x, y } = category;
    return {
      name: x,
      value: y
    };
  });
  categoriesWidget.categories = data;
}

function handleCategoriesSelected() {
  const categoriesWidget = document.getElementById('neighbourhoods');
  categoriesWidget.addEventListener('categoriesSelected', (event) => {
    filterNeighbourhood(event.detail);
  });
}

let neighbourhoodFilter = '';
let roomTypeFilter = '';

function filterNeighbourhood (neighbourhoods) {
  if (neighbourhoods.length > 0) {
    const formattedData = neighbourhoods.map((neighbourhood) => {
      return `'${neighbourhood}'`;
    });
    neighbourhoodFilter = `$neighbourhood_group in [${formattedData.join(',')}]`;
  } else {
    neighbourhoodFilter = '';
  }
  applyFilters();
}


function handleLayerSelector () {
  const entireSwitch = document.getElementById('entire-switch');
  const privateSwitch = document.getElementById('private-switch');
  const sharedSwitch = document.getElementById('shared-switch');

  function filterByLayer () {
    const entireChecked = entireSwitch.checked;
    const privateChecked = privateSwitch.checked;
    const sharedChecked = sharedSwitch.checked;
    const entireValue = "'Entire home/apt'";
    const privateValue = "'Private room'";
    const sharedValue = "'Shared room'";
    const filterValues = [];

    let color = `opacity(rgb(0,0,255), 0.25)`;
    if (entireChecked) {
      filterValues.push(entireValue);
    }
    if (privateChecked) {
      filterValues.push(privateValue);
    }
    if (sharedChecked) {
      filterValues.push(sharedValue);
    }
    if (filterValues.length === 3) {
      roomTypeFilter = '';
    } else if (filterValues.length > 0) {
      roomTypeFilter = `$room_type in [${filterValues.join(',')}]`;
    } else {
      roomTypeFilter = `$room_type in ['wadus']`;
    }
    applyFilters();
  }

  entireSwitch.addEventListener('change', (event) => {
    filterByLayer();
  });
  privateSwitch.addEventListener('change', (event) => {
    filterByLayer();
  });
  sharedSwitch.addEventListener('change', (event) => {
    filterByLayer();
  });
}

function applyFilters () {
  const both = neighbourhoodFilter && roomTypeFilter;
  const color = 'rgb(0,0,255)';
  const opacity = '0.25';
  let colorExp = `opacity(${color}, ${opacity})`;

  if (!viz) {
    return;
  }

  if (both) {
    colorExp = `opacity(${color}, ${neighbourhoodFilter} and ${roomTypeFilter} * ${opacity})`;
  } else if (neighbourhoodFilter) {
    colorExp = `opacity(${color}, ${neighbourhoodFilter} * ${opacity})`;
  } else if (roomTypeFilter) {
    colorExp = `opacity(${color}, ${roomTypeFilter} * ${opacity})`;
  }
  viz.color.blendTo(colorExp);
}

const responsiveContent = document.querySelector('as-responsive-content');
responsiveContent.addEventListener('ready', onLoad);