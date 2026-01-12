const recommendButton = document.getElementById('recommend-button');
const menuDisplay = document.getElementById('menu-display');
const themeToggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

const dinnerMenus = [
    'Pizza 🍕',
    'Sushi 🍣',
    'Pasta 🍝',
    'Tacos 🌮',
    'Bibimbap 🍚',
    'Steak 🥩',
    'Fried Chicken 🍗',
    'Hamburger 🍔',
    'Curry 🍛',
    'Ramen 🍜',
    'Pho 🍲',
    'Salad 🥗',
    'Kimchi Jjigae 🇰🇷',
    'Pad Thai 🇹🇭',
    'Gyoza 🥟',
];

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
    menuDisplay.innerHTML = '<span>Click the button!</span>';
});

// Theme toggle button event listener
themeToggleButton.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Recommendation button event listener
recommendButton.addEventListener('click', () => {
    menuDisplay.innerHTML = ''; // Clear previous
    
    // Simple "thinking" animation
    const thinking = document.createElement('span');
    thinking.className = 'thinking';
    thinking.textContent = '...';
    menuDisplay.appendChild(thinking);
    
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
        const recommendedMenu = dinnerMenus[randomIndex];
        
        const result = document.createElement('span');
        result.className = 'menu-result';
        result.textContent = recommendedMenu;

        menuDisplay.innerHTML = ''; // Clear "thinking"
        menuDisplay.appendChild(result);
    }, 500); // 0.5 second delay
});