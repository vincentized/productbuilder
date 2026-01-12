document.addEventListener('DOMContentLoaded', () => {
    const recommendButton = document.getElementById('recommend-button');
    const dinnerDisplay = document.getElementById('dinner-recommendation');
    const dinnerDisplayParagraph = dinnerDisplay.querySelector('p');

    const dinnerMenus = [
        'Chicken 🍗',
        'Pizza 🍕',
        'Sushi 🍣',
        'Pasta 🍝',
        'Tacos 🌮',
        'Bibimbap 🍚',
        'Steak 🥩',
        'Hamburger 🍔',
        'Curry 🍛',
        'Ramen 🍜',
        'Kimchi Stew 🥘',
        'Soybean Paste Stew 🍲',
        'Tteokbokki 🌶️',
        'Grilled Pork Belly 🥓',
        'Jokbal/Bossam 🐷'
    ];

    recommendButton.addEventListener('click', () => {
        // Show a "thinking" message
        dinnerDisplayParagraph.textContent = 'Thinking... 🤔';

        // Wait a moment before revealing the choice
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
            const recommendedMenu = dinnerMenus[randomIndex];
            dinnerDisplayParagraph.textContent = `How about ${recommendedMenu} for dinner tonight?`;
        }, 700); // 0.7 second delay for effect
    });
});
