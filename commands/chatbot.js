module.exports = [
  {
    name: "CrownSMP",
    aliases: ["setChatbot", "set-chatbot"],
    category: "CrownSMP",
    description: "CrownSMP",

    code: `
$description[1;> Successfully enabled the CrownSMP to <#$findChannel[$message;no]>]
$color[1;Yellow]
$setServerVar[chatbotChannel;$findChannel[$message;no]]

$onlyIf[$findChannel[$message;no]!=;{newEmbed:{description:\:_\: Invalid Args in \`<channel>\`
Usage:
\`set-CrownSMP <channel name | mention>\`}{color:Yellow}}]

$onlyIf[$message!=;{newEmbed:{description:Invalid Args!
Usage:
\`set-CrownSMP <channel mention | channel name | channel ID>\`}{color:Yellow}}]

$onlyIf[$findChannel[$message;no]!=$getServerVar[chatbotChannel];{newEmbed:{description:\:_\: Chat bot is already active in <#$findChannel[$message;no]>}{color:Yellow}}]

$onlyPerms[admin;{newEmbed:{description: Missing
\`Manage_Server\` Perms}{color:Yellow}}]

`,
  },
  {
    name: "reset-CrownSMP",
    aliases: "resetCrownSMP",
    usage: "Reset-CrownSMP <#chnl>",
    category: "CrownSMP",
    description: "Resets the CrownSMP in the server",

    code: `
   $description[1;Successfully disabled CrownSMP in this server]
   $color[1;#ff0000]

   $setServerVar[chatbotChannel;]
   $onlyIf[$getServerVar[chatbotChannel]!=;{newEmbed:{description:\:_\: This server has no CrownSMP channel!}{color:Yellow}}]

  $onlyPerms[admin;{newEmbed:{description:\:_\: Missing
  \`Manage_Server\` Perms!}{color:Yellow}}]
`,
  },
];
