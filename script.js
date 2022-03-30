window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';

    let places = staticLoadPlaces();
    renderPlaces();
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
        scale: '0.5 0.5 0.5',
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

    
    //let latitude = place.location.lat;
    //let longitude = place.location.lng;

    let model = document.createElement('a-entity');
    //model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

    setModel(models[modelIndex], model);

    //model.setAttribute('animation-mixer', '');

    let anim = document.createElement('a-animation');

    anim.setAttribute('attribute', 'rotation');
    anim.setAttribute('dur', '10000');
    anim.setAttribute('to', '0 360 0');
    anim.setAttribute('repeat', 'indefinite');
    anim.setAttribute('easing', 'linear');

    model.appendChild(anim);

    document.querySelector('button[data-action="change"]').addEventListener('click', function () {
        var entity;
        modelIndex++;
        var newIndex = modelIndex % models.length;
        setModel(models[newIndex], entity);
    });

    scene.appendChild(marker);    
    marker.appendChild(model);        
}
