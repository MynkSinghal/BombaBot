const discord = require("discord.js");

module.exports = {
  name: "howgay",
  aliases: ["howgay"],

  run: async (bot, message, args) => {
    let random = Math.floor(Math.random() * Math.floor(100));
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("Mention a user! Dumb Dumb");

    const embed = new discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("gay Meter")
      .setDescription(`${user} is ${random}% gay!!`);
    if (user) return message.channel.send(embed);
  }
};
