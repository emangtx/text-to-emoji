const emojiMap = {
    happy: "😊",
    sad: "😢",
    love: "❤️",
    cat: "🐱",
    dog: "🐶",
    smile: "😄",
    angry: "😠",
    surprised: "😲",
    tired: "😴",
    coffee: "☕",
    thumbs: "👍",
    fire: "🔥",
    star: "⭐",
    moon: "🌙",
    sun: "☀️",
    heart: "💖",
    cool: "😎",
    laugh: "😂",
    crying: "😭",
    kiss: "😘",
    party: "🎉",
    cake: "🍰",
    pizza: "🍕",
    burger: "🍔",
    icecream: "🍦",
    apple: "🍎",
    banana: "🍌",
    grape: "🍇",
    watermelon: "🍉",
    car: "🚗",
    bike: "🚲",
    plane: "✈️",
    train: "🚂",
    clock: "⏰",
    money: "💰",
    gift: "🎁",
    phone: "📱",
    computer: "💻",
    book: "📚",
    pen: "✏️",
    music: "🎵",
    movie: "🎥",
    camera: "📷",
    house: "🏠",
    tree: "🌳",
    flower: "🌸",
    ocean: "🌊",
    mountain: "⛰️",
    rainbow: "🌈",
    globe: "🌍",
    lightbulb: "💡",
    question: "❓",
    exclamation: "❗",
    check: "✅",
    cross: "❌",
    clapping: "👏",
    running: "🏃",
    dancing: "💃",
    praying: "🙏",
    victory: "✌️",
    handshake: "🤝",
    waving: "👋",
    baby: "👶",
    family: "👨‍👩‍👧‍👦",
    robot: "🤖",
    alien: "👽",
    superhero: "🦸",
    ghost: "👻",
    dragon: "🐉",
    unicorn: "🦄",
    bear: "🐻",
    lion: "🦁",
    tiger: "🐯",
    frog: "🐸",
    pig: "🐷",
    chicken: "🐔",
    fish: "🐟",
    whale: "🐋",
    dolphin: "🐬",
    octopus: "🐙",
    sun: "☀️",
    moon: "🌙",
    cloud: "☁️",
    snowflake: "❄️",
    thunder: "⚡",
    rainbow: "🌈",
    fire: "🔥",
    water: "💧",
    earth: "🌍",
    star: "⭐",
    comet: "☄️",
    sparkle: "✨"
};

// Function to convert text to emoji, with support for the Somaliland flag image
function convertToEmoji(text) {
    // Replace "somaliland" and "somaliland flag" with the image
    let emojiText = text.split(" ").map(word => emojiMap[word.toLowerCase()] || word).join(" ");
    emojiText = emojiText.replace(/somaliland flag|somaliland/gi, '<img src="images/somaliland-flag.png" alt="Somaliland Flag" style="width: 24px; height: 24px;">');
    return emojiText;
}

// Event listener for the button click
document.getElementById("convertButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    const emojiText = convertToEmoji(inputText);
    document.getElementById("emojiResult").innerHTML = emojiText; // Use innerHTML to support the image tag
});
