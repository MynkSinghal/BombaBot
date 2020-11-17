const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
  name: "beg",
  noalias: [""],
  category: "economy",
  description: "Beg for money",
  usage: " ",
  accessableby: "everyone",

  run: async (bot, message, args) => {
    let user = message.author;

    let timeout = 120000;
    let amount = 20000;

    let beg = await db.fetch(`beg_${user.id}`);

    if (beg !== null && timeout - (Date.now() - beg) > 0) {
      let time = ms(timeout - (Date.now() - beg));

      let timeEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
          `<:bombacross:764545831285817374> Looks like you just begged \n\n come back again in ${time.minutes}m ${time.seconds}s `
        );
      message.channel.send(timeEmbed);
    } else {
      let moneyEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
          `<:checkedbomba:777869968121135124> yay, you successfully begged and earnt <:checkdollarbomba:777868122685833287> ${amount} Dollar `   // tick ka emoji daalo
        );
      message.channel.send(moneyEmbed);
      db.add(`money_${user.id}`, amount);
      db.add(`begs_${user.id}`, 1);
      db.set(`beg_${user.id}`, Date.now());
    }
  }
};

//come to buy.js
