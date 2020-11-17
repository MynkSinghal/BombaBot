const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "slap",
  category: "action",
  aliases: [],
  usage: ["slap @user"],
  description: "slap a user",
  run: async (client, message, args) => {
    let user = message.mentions.users.first();
    if (!user) return message.reply("You need to mention someone to slap them");
    const { body } = await superagent.get("https://nekos.life/api/v2/img/slap");

    if (user.id === message.author.id) {
      message.channel.send("You cant slap yourself");
    } else {
      let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(
          `${message.author.username} slapped ${
            message.mentions.users.first().username
          }`,
          `user.displayAvatarURL({ dynamic: true })`
        )
        .setImage(body.url)
        .setFooter(
          `Developer BombaBot Team`,
          "https://media.discordapp.net/attachments/752989370511786147/757229853283057732/source.gif?width=677&height=441"
        );
      message.channel.send(embed);
    }
  }
};
