const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "hug",
  category: "action",
  aliases: [],
  usage: ["hug @user"],
  description: "Hug a user",
  run: async (client, message, args) => {
    let user = message.mentions.users.first();
    if (!user) return message.reply("You need to mention someone to hug them");
    const { body } = await superagent.get("https://nekos.life/api/hug");

    if (user.id === message.author.id) {
      message.channel.send("You cant hug yourself");
    } else {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(
          `${message.author.username} hugged ${
            message.mentions.users.first().username
          }`
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
