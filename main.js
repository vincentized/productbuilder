const recommendButton = document.getElementById('recommend-button');
const menuDisplay = document.getElementById('menu-display');
const themeToggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

const dinnerMenus = [
    { name: 'Pizza 🍕', imageUrl: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Sushi 🍣', imageUrl: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Pasta 🍝', imageUrl: 'https://images.pexels.com/photos/128408/pexels-photo-128408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Tacos 🌮', imageUrl: 'https://images.pexels.com/photos/4958783/pexels-photo-4958783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Bibimbap 🍚', imageUrl: 'https://media.istockphoto.com/id/533169335/photo/bibimbap-korean-food.jpg?s=1024x1024&w=is&k=20&c=6aA3Tz9yFrKk8b2y08lIgHDQZ7E4yDxkvO26i3yKzSA=' },
    { name: 'Steak 🥩', imageUrl: 'https://images.pexels.com/photos/3662132/pexels-photo-3662132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Fried Chicken 🍗', imageUrl: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Hamburger 🍔', imageUrl: 'https://media.istockphoto.com/id/182744943/photo/burger.jpg?s=1024x1024&w=is&k=20&c=ITKQIm9gn1H-DZ8FUzawukQdAXUsbsU4-_npC2rGUos=' },
    { name: 'Curry 🍛', imageUrl: 'https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Ramen 🍜', imageUrl: 'https://images.pexels.com/photos/1907097/pexels-photo-1907097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Pho 🍲', imageUrl: 'https://media.istockphoto.com/id/1345819777/photo/pho-vietnamese-soup-in-a-bowl.jpg?s=1024x1024&w=is&k=20&c=bJ3a_mh1_aAwo5G61-qHef91yW3n3cW4M370Vz2gH90=' },
    { name: 'Salad 🥗', imageUrl: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Kimchi Jjigae 🇰🇷', imageUrl: 'https://media.istockphoto.com/id/1331235120/photo/kimchi-soup-kimchi-jjigae.jpg?s=1024x1024&w=is&k=20&c=4aC0jVbW3Y-0G9o2y-mfib2B3B-5s629J3K-2tLh2Uk=' },
    { name: 'Pad Thai 🇹🇭', imageUrl: 'https://images.pexels.com/photos/2704940/pexels-photo-2704940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Gyoza 🥟', imageUrl: 'https://images.pexels.com/photos/8169213/pexels-photo-8169213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
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
    
    const thinking = document.createElement('span');
    thinking.className = 'thinking';
    thinking.textContent = '...';
    menuDisplay.appendChild(thinking);
    
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
        const recommendedMenu = dinnerMenus[randomIndex];
        
        const resultText = document.createElement('span');
        resultText.className = 'menu-result';
        resultText.textContent = recommendedMenu.name;

        const image = document.createElement('img');
        image.src = recommendedMenu.imageUrl;
        image.className = 'menu-image';

        menuDisplay.innerHTML = ''; // Clear "thinking"
        menuDisplay.appendChild(resultText);
        menuDisplay.appendChild(image);

    }, 500);
});