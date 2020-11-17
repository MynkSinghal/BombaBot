const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "insult",
  category: "action",
  aliases: ["insult"],
  usage: ["insult @user"],
  description: "insult someone",
  run: async (client, message, args) => {
    var images = [
      "https://cdn.weeb.sh/images/Bk9mYdXvZ.gif",
      "https://cdn.weeb.sh/images/rJqSKumDZ.gif",
      "https://cdn.weeb.sh/images/HJNGt_mwZ.gif",
      "https://cdn.weeb.sh/images/ByONKd7wW.gif",
      "https://cdn.weeb.sh/images/BJrEFumv-.gif",
      "https://cdn.weeb.sh/images/HkvEKuQvb.gif",
      "https://cdn.weeb.sh/images/rJbMK_7vW.gif",
      "https://cdn.weeb.sh/images/S1gXGFOmv-.gif",
      "https://cdn.weeb.sh/images/HkGNF_QwZ.gif",
      "https://cdn.weeb.sh/images/rkk4FdQwW.gif",
      "https://cdn.weeb.sh/images/S1rHtd7vZ.gif",
      "https://cdn.weeb.sh/images/S1orK_mv-.gif"
    ];
    var image = Math.floor(Math.random() * images.length);
    let user = message.mentions.users.first();

    if (!user)
      return message.reply("You need to mention someone to insult them");

    if (user.id === message.author.id) {
      message.channel.send("You cant insult yourself");
    } else {
      let random = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(
          `${message.author.username} Insults ${
            message.mentions.users.first().username
          } Oof!`
        )
        .setImage(String([images[image]]))
        .setFooter(
          `Developer BombaBot Team`,
          "https://media.discordapp.net/attachments/752989370511786147/757229853283057732/source.gif?width=677&height=441"
        );
      message.channel.send(random);
    }
  }
};
