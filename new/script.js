const body = document.getElementById('body');
const modeToggle = document.getElementById('modeToggle');

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
    body.style.backgroundColor = colors[day];
}

// Set initial color scheme on load
window.onload = function() {
    setColorScheme();
    if (body.classList.contains('dark')) {
        toggleMode(); // Ensure dark mode is applied if it's active
    }
}
