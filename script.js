window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '<';

    //const button2 = document.querySelector('button[data-action="change2"]');
    //button2.innerText = '>';

    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Planets',
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
        name: 'Mercury',
    },
    {
        url: 'assets/models/venus.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Venus',
    },
    {
        url: 'assets/models/earth.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Earth',
    },
    {
        url: 'assets/models/mars.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Mars',
    },
    {
        url: 'assets/models/jupiter.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Jupiter',
    },
    {
        url: 'assets/models/saturn.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Saturn',
    },
    {
        url: 'assets/models/uranus.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Uranus',
    },
    {
        url: 'assets/models/neptune.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Neptune',
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
    div.innerText = model.name;
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');
    let marker = document.querySelector('a-marker');

    places.forEach(() => {
        //let latitude = place.location.lat;
        //let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        //model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        setModel(models[modelIndex], model);

        model.setAttribute('animation-mixer', '');

        let anim = document.createElement('a-animation');

        anim.setAttribute('attribute', 'rotation');
        anim.setAttribute('dur', '10000');
        anim.setAttribute('to', '0 360 0');
        anim.setAttribute('repeat', 'indefinite');
        anim.setAttribute('easing', 'linear');

        model.appendChild(anim);

        document.querySelector('button[data-action="change"]').addEventListener('click', function () {
            var entity = document.querySelector('gps-entity-place');
           //if (modelIndex == 0) {
                //modelIndex = 7;
            //} else {
              //  modelIndex--;
            //}
            modelIndex++;
            var newIndex = modelIndex % models.length;
            setModel(models[newIndex], model);
        });

        scene.appendChild(marker);    
        marker.appendChild(model);        
    });
}

function changeModel() {
    var model = models[modelIndex];

}

function createScene() {
    let scene = document.querySelector('a-scene');
    let marker = document.querySelector('a-marker');
}

