const Discord = require("discord.js");

module.exports = {
  name: "help",
  category: "info",
  aliases: ["help", "h"],

  description: "Help ComMAND",
  timeout: 10000,

  run: async (bot, message, args) => {
    const helpembed = new Discord.MessageEmbed()
      .setTitle(`Commands List`)
      .addField("<:modbomba:776870284657426472> For **MODERATION** commands", "<:bombacircle:777406078429954059> Type  ``helpmod`` ``modhelp`` or ``moderationhelp``")
      .addField("<:backupbomba:776872811376935012> **For **BACKUP commands", "<:bombacircle:777406078429954059> Type  ``helpbackup`` ``backuphelp`` or ``bhelp``")
      .addField("<:ecobomba:776870642166792203> For **ECONOMY** commands", "<:bombacircle:777406078429954059> Type  ``helpeco`` ``ecohelp`` or ``economyhelp``")
      .addField("<:funbomba:776871195324579852> For **FUN** commands", "<:bombacircle:777406078429954059> Type  ``helpfun``  ``funhelp`` or ``fhelp``")
      .addField("<:infobomba:776871586510536744> For **INFO** commands", "<:bombacircle:777406078429954059> Type ``helpinfo`` ``infohelp`` ``ihelp`` or ``informationhelp``")
      .addField("<:camerabomba:776873327897346050> For **IMAGE** commands", "<:bombacircle:777406078429954059> Type  ``imagehelp`` ``imagehelp`` or ``imageshelp``")
      .addField("<:nsfwbomba22:776873973886484530> For **NSFW** commands", "<:bombacircle:777406078429954059> Type  ``nsfwhelp`` ``helpnsfw`` or ``adulthelp``")
      .addField("<:musicalbomba:776869711404597279> For **MUSIC** commands", "<:bombacircle:777406078429954059> Type  ``musichelp`` ``helpmusic`` or ``songhelp``")
      .addField("<:gamesbomba:776875527331774486> For **GAMES** commands", "<:bombacircle:777406078429954059> Type  ``helpgames`` ``gameshelp`` or ``gamehelp``")
      .addField("<:ringingphonebomba:777105353988505611> For **PHONECALL** commands", "<:bombacircle:777406078429954059> Type  ``helpphone`` ``phonehelp`` ``phonecallhelp`` or ``helpphonecall``")
      .addField("<:bombaxgiveaway:772919371986239498> For **GIVEAWAY** commands", "<:bombacircle:777406078429954059> Type  ``helpgw`` ``gwhelp`` ``giveawayhelp`` or ``helpgiveaway``")
      .addField("<:coronavvvbomba34:777105108420657184> For **CORONA** commands", "<:bombacircle:777406078429954059> Type  ``helpcorona`` ``covidhelp`` or ``coronahelp``")
      .addField(
        " IMPORTANT LINKS ",
        "**[SUPPORT SERVER](https://discord.gg/ahKn4Dd) • [INVITE ME](https://discord.com/api/oauth2/authorize?client_id=730307957081768037&permissions=2146958839&scope=bot) • [WEBSITE](https://website.bombabot.tk/) • [DONATE US](https://www.patreon.com/bombabotdiscord) • [VOTE](https://top.gg/bot/730307957081768037/vote)**"
      )
      
      .setColor("RANDOM")
      .setFooter(
        `Developers BombaBot Team`,
        "https://media.discordapp.net/attachments/667763217723817996/771801437192716358/1add0885836871971d84d3b19d9425fc.png?width=450&height=443"
      )
      .setTimestamp().setDescription(`Prefix : **(b?)**
Type **(b?invite)** to invite bot in your server `);

    message.channel.send(helpembed);
  }
};
