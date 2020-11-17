const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../../config");
const db = require("quick.db");

module.exports = {
  name: "store",
  noalias: [""],
  category: "economy",
  description: "Shows list of items",
  usage: " ",
  accessableby: "everyone",

  run: async (bot, message, args) => {
    let prefix;
    let fetched = await db.fetch(`prefix_${message.guild.id}`);

    if (fetched === null) {
      prefix = PREFIX;
    } else {
      prefix = fetched;
    }

    let embed = new MessageEmbed()
      .setDescription(
        `:medal:**VIP Ranks**\n\n:wind_chime: Bronze: 200 Dollar [${prefix}buy/${prefix}sell bronze]\n\n**Lifestyle Items**\n\n:athletic_shoe: Fresh Nikes: 600 Dollar [${prefix}buy/${prefix}sell nikes]\n:race_car: Car: 800 Dollar [${prefix}buy/${prefix}sell car]\n:house_with_garden: Mansion: 1200 Dollar [${prefix}buy/${prefix}sell mansion]`
      )
      .setColor("RANDOM");
    message.channel.send(embed);
  }
};
