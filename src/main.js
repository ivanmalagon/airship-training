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

function filterNeighbourhood (neighbourhoods) {
  if (!viz) {
    return;
  }

  let color = `opacity(rgb(0,0,255), 0.25)`;
  if (neighbourhoods.length > 0) {
    const formattedData = neighbourhoods.map((neighbourhood) => {
      return `'${neighbourhood}'`;
    });
    const filterExpression = `$neighbourhood_group in [${formattedData.join(',')}]`;
    color = `opacity(rgb(0,0,255), ${filterExpression} * 0.25)`;
  }
  viz.color.blendTo(color, 2000);
}

function handleLayerSelector () {
  const entireSwitch = document.getElementById('entire-switch');
  const privateSwitch = document.getElementById('private-switch');
  const sharedSwitch = document.getElementById('shared-switch');

  entireSwitch.addEventListener('change', (event) => {
    const checked = event.detail;
    let color = `opacity(rgb(0,0,255), 0.25)`;
    if (checked) {
      const filterExpression = `$room_type == 'Entire home/apt'`;
      color = `opacity(rgb(0,0,255), ${filterExpression} * 0.25)`;
    }
    viz.color.blendTo(color);


  });
  privateSwitch.addEventListener('change', (event) => {
    console.log('multiple', event.detail);
  });
  sharedSwitch.addEventListener('change', (event) => {
    console.log('multiple', event.detail);
  });
}

window.onload = onLoad;