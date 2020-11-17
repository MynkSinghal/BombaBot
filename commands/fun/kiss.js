const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "kiss",
  category: "action",
  aliases: ["kiss"],
  usage: ["kiss @user"],
  description: "kill someone",
  run: async (client, message, args) => {
    var images = [
      "https://cdn.weeb.sh/images/B1yv36_PZ.gif",
      "https://cdn.weeb.sh/images/rkv_mRKF-.gif",
      "https://cdn.weeb.sh/images/BkLQnT_PZ.gif",
      "https://cdn.weeb.sh/images/ryFdQRtF-.gif",
      "https://cdn.weeb.sh/images/ryceu6V0W.gif",
      "https://cdn.weeb.sh/images/B1MJ2aODb.gif",
      "https://cdn.weeb.sh/images/SydfnauPb.gif",
      "https://cdn.weeb.sh/images/BkUJNec1M.gif",
      "https://cdn.weeb.sh/images/HklBtCvTZ.gif",
      "https://cdn.weeb.sh/images/SJINn6OPW.gif",
      "https://cdn.weeb.sh/images/ByoCoT_vW.gif",
      "https://cdn.weeb.sh/images/rkde2aODb.gif",
      "https://cdn.weeb.sh/images/r1H42advb.gif",
      "https://cdn.weeb.sh/images/SkQIn6Ovb.gif",
      "https://cdn.weeb.sh/images/r1cB3aOwW.gif",
      "https://cdn.weeb.sh/images/S1E1npuvb.gif",
      "https://cdn.weeb.sh/images/SJJUhpOD-.gif",
      "https://cdn.weeb.sh/images/BJMX2TuPb.gif",
      "https://cdn.weeb.sh/images/SJ8I2Tuv-.gif",
      "https://cdn.weeb.sh/images/rypMnpuvW.gif",
      "https://cdn.weeb.sh/images/SJn43adDb.gif"
    ];
    var image = Math.floor(Math.random() * images.length);
    let user = message.mentions.users.first();

    if (!user) return message.reply("You need to mention someone to kiss them");

    if (user.id === message.author.id) {
      message.channel.send("You cant kiss yourself");
    } else {
      let random = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(
          `${message.author.username} kissed ${
            message.mentions.users.first().username
          } ^_^`
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
