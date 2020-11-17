const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const Discord = require("discord.js");
module.exports = {
  name: "blacklist",
  aliases: ["bl"],
  category: "economy",
  description: "Adds coin to a user",
  usage: "[ mention | ID]",
  accessableby: "Administrator, Owner",

  run: async (bot, message, args) => {
    let blacklist = message.mentions.users.first();
    let reason = args[1];
    if (!reason) {
      let invaildusage = new Discord.MessageEmbed()
        .setTitle("Invaild Usage")
        .setDescription(`,blacklist ${blacklist} [reason] `);
    }
    let invaildusage = new Discord.MessageEmbed()
      .setTitle("Invaild Usage")
      .setDescription(",blacklist @kid [reason] ");
    if (!blacklist) return message.channel.send(invaildusage);
    let blacklistcheck = db.get(`blacklistedusers`);
    if (blacklistcheck && blacklistcheck.find(x => x.user == blacklist.id))
      return message.channel.send("this user it's already blacklisted");

    let blacklistdata = {
      reason: reason,
      user: blacklist.id
    };
    db.push(`blacklistedusers`, blacklistdata);
    message.channel.send(`
Kid blacklisted.
 `);
  }
};
