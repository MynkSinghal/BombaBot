const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const Discord = require("discord.js");
module.exports = {
  name: "removemoney",
  aliases: ["rm"],
  category: "economy",
  description: "Removes money from a user",
  usage: "[ mention | ID]",
  accessableby: "Owner",

  run: async (bot, message, args) => {
    if (
      !["678555030038511627", "690539494473990204"].includes(message.author.id)
    ) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          "Oops! This is Locked.",
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setColor("#FF0000");
      return message.channel.send(embed);
    }

    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase()
      );
    if (!user) return message.channel.send("**Enter A Valid User!**");

    if (!args[1]) return message.channel.send("**Please Enter A Amount!**");
    if (isNaN(args[1])) return message.channel.send("**Enter Valid Amount!**");
    let bal = await db.fetch(`money_${user.id}`);

    if (args[0] > bal)
      return message.channel.send(
        "<:hammer_pick:728616792477401150> **Cannot Remove That Much Money!**"
      );
    db.subtract(`money_${user.id}`, args[1]);
    let bal2 = await db.fetch(`money_${user.id}`);

    let moneyEmbed = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(
        `<:money_with_wings:728616715898060801> Removed ${
          args[1]
        } Dollar\n\nNew Balance: ${bal2}`
      );
    message.channel.send(moneyEmbed);
  }
};
