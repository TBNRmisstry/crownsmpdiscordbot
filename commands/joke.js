const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
    "Why was the math book sad? Because it had too many problems.",
    "I would tell you a joke about UDP, but you might not get it.",
    "I used to play piano by ear, but now I use my hands.",
    "I'm on a whiskey diet. I've lost three days already."
];

module.exports = {
    name: 'joke',
    description: 'Tells a random joke.',
    execute(message, args) {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        message.channel.send(jokes[randomIndex]);
    },
};

