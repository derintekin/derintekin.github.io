// firstscripts.js

// Display the time, day of the week, and date
function displayTimeAndDate() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const time = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    document.getElementById('timeAndDate').textContent = `Today is ${time} on ${formattedDate}`;
}

// Greet the user by their name and mention their mood
function greetUser() {
    const name = document.getElementById('name').value;
    const feeling = document.getElementById('feeling').value;

    document.getElementById('greeting').textContent = `The Dainty Tiger welcomes you, ${name}! We're glad you are feeling ${feeling}!`;
}

// Display the name of the polygon based on the user's favorite number
function showFavoritePolygon() {
    const favoriteNumber = Math.abs(Math.round(parseFloat(document.getElementById('favoriteNumber').value)));
    const polygonNames = ['Digon', 'Triangle', 'Square', 'Pentagon', 'Hexagon', 'Heptagon', 'Octagon', 'Nonagon', 'Decagon'];

    const polygonName = favoriteNumber <= 10 ? polygonNames[favoriteNumber] : 'Polygon with Many Sides';

    document.getElementById('polygonName').textContent = `Your favorite polygon is a ${polygonName}.`;
}

// Function 1 related to your animal brand
function randomizeCatType() {
    const catTypes = ['Siamese', 'Maine Coon', 'Persian', 'Bengal', 'Sphynx', 'Ragdoll'];
    const randomIndex = Math.floor(Math.random() * catTypes.length);
    const randomCatType = catTypes[randomIndex];

    document.getElementById('catType').textContent = `Your random cat type is ${randomCatType}.`;
}




// Add event listener to run functions when the page loads
window.addEventListener('load', function () {
    displayTimeAndDate();
});

// Add event listener to run the function when the form is submitted
function submitForm() {
    greetUser();
    showFavoritePolygon();
}
