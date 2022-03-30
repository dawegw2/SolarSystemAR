window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';

    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Pokèmon',
            location: {
                // lat: <your-latitude>,
                // lng: <your-longitude>,
            },
        },
    ];
}

var models = [
    {
        url: 'assets/models/mercury.gltf',
        scale: '0.5 0.5 0.5',
        info: 'Mercury',
    },
    {
        url: 'assets/models/venus.gltf',
        scale: '0.6 0.6 0.6',
        info: 'Venus',
    },
    {
        url: 'assets/models/earth.gltf',
        scale: '0.5 0.5 0.5',
        info: 'Earth',
    },
];

var modelIndex = 0;
var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('gltf-model', model.url);

    const div = document.querySelector('.instructions');
    div.innerText = model.info;
};

function renderPlaces() {
    let scene = document.querySelector('a-scene');
    let marker = document.querySelector('a-marker');


    let model = document.createElement('a-entity');
    //model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

    setModel(models[modelIndex], model);

    model.setAttribute('animation-mixer', '');

    marker.appendChild(model);        
}

document.querySelector('button[data-action="change"]').addEventListener('click', function () {
    renderPlaces(places);
    var entity = document.querySelector('[gps-entity-place]');
    modelIndex++;
    var newIndex = modelIndex % models.length; 
    setModel(models[newIndex], entity);
});