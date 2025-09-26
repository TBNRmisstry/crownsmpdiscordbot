const aoijs = require("aoi.js");
const bot = new aoijs.AoiClient({
  token: process.env.Token,
  prefix: "/",
  intents: ["GUILDS", "GUILD_MESSAGES"],
  mobilePlatform: false,
});

// Status
bot.status({
  text: "Helping out in CrownSMP discord content help",
  type: "Patreon",
  url: "https://patreon.com/NecroSMP?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink",
});

// Events
bot.onMessage();

// Load Commands
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, "./commands/");

// Chat bot main command
bot.command({
  name: "$alwaysExecute",
  category: "Command Support",
  code: `
  $reply[$messageID;yes]
  $httpRequest[https://api.udit.tk/api/chatbot?message=$message&name=Disco&gender=Male&user=$authorId;GET;;message]
  $botTyping
  $cooldown[2s;{newEmbed:{description:\:_\: Don't send messages too fast, you can break me by doing it}{color:Yellow}}]

  $onlyIf[$checkContains[$message;@everyone;@here]==false;{newEmbed:{description:\:_\: I don't disturb people!}{color:#ff0000}}]

  $onlyForChannels[$getServerVar[chatbotChannel];]

  $onlyIf[$getServerVar[chatbotChannel]!=;]
  $suppressErrors
  `,
});

// Define bot variables
bot.variables({
  money: 0,
  chatbotChannel: "1220768751792689203"
});

// Define help command
bot.command({
   name: "help",
   aliases: ["commands"],
   description: "Display available commands",
   code: `
   $sendEmbed[$authorID;{color:#ff0000;description:Here are the available commands:
- /help: Display available commands
- /joke: tells a random joke
- /balance: check your balance
- /daily: claim your daily reward
- /work: work and earn money
- /beg: beg for money
- /botinfo: get information about the bot
- /serverinfo: get information about the server
- /userinfo: get information about a user
- /avatar: get the avatar of a user
- /servericon: get the icon of the server
- /nitro: generate a random nitro code for nitro a working code
- /meme: get a random meme
- /talk: talk to the bot
- /talk-disable: disable the talk command
- /talk-enable: enable the talk command
- /promote: promote your discord youtube but not a scam of any type
- /demote: demote a staff member by do /demote [user]
- /rank: check your rank
- /leaderboard: check the leaderboard
- /prem: check your premium status
- /premium: get a link to buy premium
- /troll: troll a user (premium users only)
- /ping: check the bot's ping
- /uptime: check the bot's uptime
- /server-invite: get the invite link of the server
- /bot-invite: get the invite link of the bot
- /report: report a bug or a user
- /suggest: suggest a feature
- /server-suggest: suggest a feature for the server
- /set-report-channel: set the report channel
- /set-suggest-channel: set the suggest channel
- /ban [Reason]
- /kick [reason]
- /purge [amount] (premium users only)
- /warn [user] [reason]
- /warnings: get a list of warnings for people that got warn
];`,
});
`,

   // Define help2 command
   bot.command({
     name: "help2",
     aliases: ["commands2"],
     description: "Display additional commands",
     code: `
       $sendEmbed[$authorID, color]"#ff0000", description:"Here are the available commands"
       - /clear-false-warnings: clear all false warnings for everyone
       - /discord: get a invite link to our discord
       - /youtube: get a link to our youtube channel
       - /twitter: get a link to our twitter page
       - /CrownSMP: get a link to our public discord CrownSMP Revamped
       - /unwarn [user] [reason]
       - /lockdown: lockdown the your discord server
       - /unlock: unlock the channel
       - /lock: lock a channel
       - /lockdown-disable: disable lockdown
       - /chat: chat with the bot
       - /chat-disable: disable the chat command
       - /chat-enable: enable the chat command
       - /mutedroles: check the muted roles
       - /mute [reason]
       - /unmute [reason]
       - /tempban [reason] [time]
       - /tempmute [reason] [time]
       - /tempwarn [reason] [time]
       - /unban [reason]
     `    
   });


    });

    // Define help3 command
   bot.command({
   name: "help3",
   code: `
    $sendEmbed$authorID;{color:#ff0000;description:"Here are the available additional commands"      
- /unban [reason]
- /unmute [reason]
- /unwarn [reason]
- /setnick [name] : set a nickname for yourself
- /set-nick [user] [name] (premium users only) : set a nickname for a user
- /set-muterole: set the mute role
- /set-modlog: set the modlog channel
- /role adder [user] [role]
- /role remove [user] [role]
- /set-leave: set the leave channel
- /set-welcome-channel: set the welcome channel
- /set-leave-channel: set the leave channel
- /set-leave-message: set the leave message
- /set-welcome-message: set the welcome message

   // Define help4 command
   bot.command({
   name: "help4",
   description: "Display even more additional commands",
    code: `
    $sendEmbed[$authorID;{color:this.#ff0000;"Here are the available additional commands"
 - /set-welcome-image: set the welcome image
 - /set-leave-image: set the leave image    
 - /join-message: set the join message
 - /leave-message: set the leave message
 - /join-image: set the join image
 - /leave-image: set the leave image (premium users only)
 - /join-channel: set the join channel
 - /leave-channel: set the leave channel
 - /join-vc: let the bot join a vc but you have to be in a vc
 - /leave-vc: let the bot leave vc
 - /set-welcome-dm: set the welcome dm
 - /set-leave-dm: set the leave dm
 - /website: get the link to the website of the bot
                         ;
  "}];                       };

     // Define help5 command
     bot.command({
    name: "help5",
    description: "Display even more additional commands",
    code: `
   $sendEmbed$authorID;{this.#ff0000;"Here are the available additional commands"
- /DashBoard: check the dashboard
- /adminlogs: check the admin logs
- /set-adminlogs: set the admin logs channel
- /staffchat: set the staff chat channel
- /staffchat-disable: disable the staff chat command
- /staffchat-set-role: set the staff chat role
- /staffchat-enable: enable the staff chat
- /staffchat-remove: remove a staffchat
- /staffchat-add: add a staffchat and have a channel for staff and create a role for staff's
- /staffchat-list: get a list of staff chat
- /hello: make the bot say hello

    "}]:

;
`
;



;

// Define botinfo command
bot.command({
  name: "botinfo",
  aliases: ["botinfo"],
  code: `
$thumbnail[https://cdn.discordapp.com/attachments/903016453578700584/915328017175640628/unknown.png]
$color[#ff0000]
$title[Bot Information]
$description[
- Bot Name: CrownSMP
- Version: 1.0.0
- Creator: JoshuaYTAI
- Creation Date: March 2024
- Community Discord: [CrownSMP Discord](https://discord.gg/wgpdvrSf72)
];
`
});

// Keep bot alive
const keepAlive = require("./server");
keepAlive();

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    ];