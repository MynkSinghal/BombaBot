const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "hold",
  category: "action",
  aliases: [],
  usage: ["hold @user"],
  description: "Hold a user",
  run: async (client, message, args) => {
    var images = [
      "https://cdn.weeb.sh/images/HJqpxp5bf.gif",
      "https://cdn.weeb.sh/images/SydAx69ZM.gif",
      "https://cdn.weeb.sh/images/Hkc9lpcbM.gif",
      "https://cdn.weeb.sh/images/Hk5_ga5bG.gif",
      "https://cdn.weeb.sh/images/BkiRKrLBz.gif",
      "https://cdn.weeb.sh/images/SJ3nxT5Wz.gif",
      "https://cdn.weeb.sh/images/B1rpeTqZf.gif",
      "https://cdn.weeb.sh/images/rJx5xa9bf.gif",
      "https://cdn.weeb.sh/images/rJX0eac-z.gif"
    ];
    var image = Math.floor(Math.random() * images.length);
    let user = message.mentions.users.first();
    if (!user) return message.reply("You need to mention someone to hold them");

    if (user.id === message.author.id) {
      message.channel.send("You cant hold yourself");
    } else {
      let random = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(
          `${message.author.username} holds ${
            message.mentions.users.first().username
          }`
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
