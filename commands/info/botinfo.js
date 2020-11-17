const Discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "info",
  aliases: ["boti", "info"],

  description: "Help ComMAND",
  timeout: 10000,

  run: async (bot, message, args) => {
    const helpembed = new Discord.MessageEmbed()
      .setTitle(`Hello! I Am Bomba Bot`)
      .addField("BombaBot is a high quailty bot used for moderation and music and some fun commands there's a lot of good commands in the bot", "I can manage your server like a professional, My all-in-one commands helps you to maintain your server by replacing other bots as there is no job which I cant do!")
      .addField("My Current guild count is **258**", " . ")
      .addField("My Current user count is **247559**", " . ")
      .addField("My Current version is **v4.2.0**"," . ")
      .addField("My Developers are **BombaMynk#3463** and **BombaGamerz#0001**", " . ")
      .addField("My Current ping is **110**ms", " .")
      .addField("My total number of commands **202**", ".")
      
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
