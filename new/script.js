const body = document.getElementById('body');
const modeToggle = document.getElementById('modeToggle');
const colorName = document.getElementById('colorName');
const currentTime = document.getElementById('currentTime');
const scoreValue = document.getElementById('scoreValue');

modeToggle.addEventListener('click', toggleMode);

function toggleMode() {
    body.classList.toggle('dark');
    body.classList.toggle('light');
}

// Function to change colors based on the day of the week
function setColorScheme() {
    const day = new Date().getDay();
    const colors = [
        '#008C45', // Sunday: Maldives Green
        '#F6A600', // Monday: Yellow
        '#00BFFF', // Tuesday: Light Blue
        '#FF4500', // Wednesday: Orange
        '#9400D3', // Thursday: Violet
        '#FF6347', // Friday: Tomato
        '#8A2BE2'  // Saturday: Blue Violet
    ];
    const colorNames = [
        "Maldives Green", 
        "Yellow", 
        "Light Blue", 
        "Orange", 
        "Violet", 
        "Tomato", 
        "Blue Violet"
    ];
    body.style.backgroundColor = colors[day];
    colorName.textContent = colorNames[day];
    scoreValue.textContent = `Score: ${99 + day * 14}`; // Change score based on day
}

// Update current time every second
function updateTime() {
    const now = new Date();
    currentTime.textContent = now.toLocaleTimeString();
}

// Set initial color scheme on load
window.onload = function() {
    setColorScheme();
    updateTime();
    setInterval(updateTime, 1000); // Update time every second
    if (body.classList.contains('dark')) {
        toggleMode(); // Ensure dark mode is applied if it's active
    }
}
