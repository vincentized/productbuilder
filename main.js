const drawButton = document.getElementById('draw-button');
const lottoNumbersContainer = document.getElementById('lotto-numbers');
const themeToggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Function to set theme
const setTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    themeToggleButton.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', theme);
};

// Load saved theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
});

// Theme toggle button event listener
themeToggleButton.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});


drawButton.addEventListener('click', () => {
    drawButton.disabled = true;
    lottoNumbersContainer.innerHTML = '';
    
    const numbers = generateUniqueNumbers();
    
    numbers.forEach((number, index) => {
        setTimeout(() => {
            const ball = createBall(number);
            lottoNumbersContainer.appendChild(ball);
        }, index * 400);
    });

    setTimeout(() => {
        drawButton.disabled = false;
    }, numbers.length * 400);
});

function generateUniqueNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function createBall(number) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.textContent = number;
    ball.style.backgroundColor = getBallColor(number);
    return ball;
}

function getBallColor(number) {
    if (number <= 10) return '#f1c40f'; // Yellow
    if (number <= 20) return '#3498db'; // Blue
    if (number <= 30) return '#e74c3c'; // Red
    if (number <= 40) return '#9b59b6'; // Purple
    return '#2ecc71'; // Green
}