// Import the required modules
const { Client, Intents } = require('discord.js');


// Event listener for when the client is ready
client.once('ready', () => {
    console.log('Bot is ready!');
});

// Event listener for when a message is sent
client.on('messageCreate', async message => {
    // Ignore messages from bots and messages that don't start with the prefix
    if (!message.content.startsWith(/) || message.author.bot) return;

    // Extract the command and arguments from the message content
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // Check if the command is 'hello'
    if (command === 'hello') {
        // Respond with 'Hello!'
        message.reply('Hello!');
    }
});

// Replace 'YOUR_DISCORD_BOT_TOKEN_HERE' with your actual bot token
client.login('BOT_TOKEN');