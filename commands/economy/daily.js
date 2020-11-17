//aagye? are haan deposit kar raha huu 
//kk kro
//main fish kr rha hu

const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
  name: "daily",
  aliases: ["day"],
  category: "economy",
  description: "Gives You 200 <:checkdollarbomba:777868122685833287> per day",
  usage: " ",
  accessableby: "everyone",

  run: async (bot, message, args) => {
    let user = message.author;

    let timeout = 86400000;
    let amount = 200;

    let daily = await db.fetch(`daily_${user.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));

      let timeEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
          `<:bombacross:764545831285817374> You've already collected your daily reward\n\nCollect it again in ${time.hours}h ${time.minutes}m ${time.seconds}s `
        );
      message.channel.send(timeEmbed);
    } else {
      let moneyEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
          `<:checkedbomba:777869968121135124> Your Daily reward <:checkdollarbomba:777868122685833287> ${amount} Dollar has been added to wallet`
        );
      message.channel.send(moneyEmbed);
      db.add(`money_${user.id}`, amount);
      db.set(`daily_${user.id}`, Date.now());
    }
  }
};
