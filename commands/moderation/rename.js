const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const ms = require("ms");

module.exports = {
  name: "rename",
  category: "moderation",
  aliases: ["setnick", "rename"],
  description: "Change name a people",
  usage: "rename <@name> <newname>",

  run: (client, message, args) => {
    let newname = args.slice(1).join(" ");
    let user = message.mentions.users.first();

    if (!user)
      return message.channel
        .send(
          "<:crosss:732467550222286868> | Please mention anyone to change name"
        )
        .catch(console.error);
    if (user === message.author.id)
      return message.channel.send(
        "I can' let you do that, self-harm is badðŸ¤¦"
      );
    message.guild
      .member(user)
      .setNickname(newname)
      .catch(console.error);
    if (!message.member.hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send(
        "<a:jsjsd:727776337343021097> | You do not have enought permission to rename members! "
      );
    const embed = new MessageEmbed()
      .setTitle("Rename!")
      .setColor("RANDOM")
      .setDescription(
        `<a:checkk:726811815870332948> | Succesfuly changed name ${user} to ${newname}`
      )
      .setTimestamp();

    message.channel.send(embed);
  }
};
