const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "tickle",
  category: "action",
  aliases: [],
  usage: ["tickle @user"],
  description: "tickle a user",
  run: async (client, message, args) => {
    let user = message.mentions.users.first();
    if (!user)
      return message.reply("You need to mention someone to tickle them");
    const { body } = await superagent.get(
      "https://nekos.life/api/v2/img/tickle"
    );

    if (user.id === message.author.id) {
      message.channel.send("You cant tickle yourself");
    } else {
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(
          `${message.author.username} tickles ${
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
