
function displayTimeAndDate() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const time = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    document.getElementById('timeAndDate').textContent = `Today is ${time} on ${formattedDate}`;
}

function greetUser() {
    const name = document.getElementById('name').value;
    const feeling = document.getElementById('feeling').value;

    document.getElementById('greeting').textContent = `The Dainty Tiger welcomes you, ${name}! We're glad you are feeling ${feeling}!`;
}

function showFavoritePolygon() {
    const favoriteNumber = Math.abs(Math.round(parseFloat(document.getElementById('favoriteNumber').value)));
    const polygonNames = ['Digon', 'Triangle', 'Square', 'Pentagon', 'Hexagon', 'Heptagon', 'Octagon', 'Nonagon', 'Decagon'];

    const polygonName = favoriteNumber <= 10 ? polygonNames[favoriteNumber] : 'Polygon with Many Sides';

    document.getElementById('polygonName').textContent = `Your favorite polygon is a ${polygonName}.`;
}

function randomizeCatType() {
    const catTypes = ['Siamese', 'Maine Coon', 'Persian', 'Bengal', 'Sphynx', 'Ragdoll'];
    const randomIndex = Math.floor(Math.random() * catTypes.length);
    const randomCatType = catTypes[randomIndex];

    document.getElementById('catType').textContent = `Your random cat type is ${randomCatType}.`;
}


window.addEventListener('load', function () {
    displayTimeAndDate();
});

function submitForm() {
    greetUser();
    showFavoritePolygon();
}
