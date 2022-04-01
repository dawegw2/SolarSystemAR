window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '>';

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
        value: "Mercury is the closest planet from the Sun and the smallest planet in our solar system. It's a rocky planet with a solid surface and a thin atmosphere.",
    },
    {
        url: 'assets/models/venus.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Venus',
        value: 'Venus is the second closest planet from the Sun. It has a toxic atmosphere and a very hot surface.',
    },
    {
        url: 'assets/models/earth.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Earth',
        value: "Earth is the third planet that orbits the Sun and is the fifth largest planet in the solar system. It has liquid on its surface.",
    },
    {
        url: 'assets/models/mars.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Mars',
        value: "Mars is the fourth planet from the Sun. It's a dusty, cold, desert world with a very thin atmosphere. ",
    },
    {
        url: 'assets/models/jupiter.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Jupiter',
        value: 'The fifth planet from the Sun is Jupiter and the largest planet in the solar system. It is a gas giant with an atmosphere made up of hydrogen and helium that contain clouds of ammonia and water.',
    },
    {
        url: 'assets/models/saturn.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Saturn',
        value: 'Saturn is the second largest planet and the sixth planet from the Sun. Saturn is another gaseous giant, famous for its large rings.',
        position: "-0.90 0 0.90",
    },
    {
        url: 'assets/models/uranus.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Uranus',
        value: "Uranus is the seventh planet from the Sun. It's an ice giant four times larger than Earth with 13 known rings.",
    },
    {
        url: 'assets/models/neptune.gltf',
        scale: '0.5 0.5 0.5',
        name: 'Neptune',
        value: 'Neptune is the furthest planet from the Sun. Like Uranus, Neptune is an ice giant that is dark and cold.',
    },
];

var modelIndex = 0;
var modelDesc = true;
var setModel = function (model, entity, desc) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    //if (model.position) {
        //entity.setAttribute('position', model.position);
    //}

    entity.setAttribute('gltf-model', model.url);
    
    let description = document.querySelector('a-text')

    description.setAttribute('value', model.value) // set planet description
    description.setAttribute('position', model.position) // set text position 

    //if (desc == true) {
       //description.setAttribute('value', model.value)
    //} else {
        //description.setAttribute('value', '')
    //}
    const div = document.querySelector('.name');
    div.innerText = model.name;
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');
    let marker = document.querySelector('a-marker')

    places.forEach(() => {
        let model = document.createElement('a-entity');

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

    /*
    document.querySelector('button[class="hide"]').addEventListener('click', function () {
        if (modelDesc == true) {
            modelDesc = false;
        } else {
            modelDesc = true; 
        }
        var newIndex = modelIndex % models.length;
        setModel(models[newIndex], model, modelDesc);
    });
    */
}

function changeModel() {
    var model = models[modelIndex];

}

function createScene() {
    let scene = document.querySelector('a-scene');
    let marker = document.querySelector('a-marker');
}

