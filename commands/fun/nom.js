const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "nom",
  category: "action",
  aliases: ["nom"],
  usage: ["nom @user"],
  description: "nom someone",
  run: async (client, message, args) => {
    var images = [
      "https://cdn.weeb.sh/images/S1FOllQj-.gif",
      "https://cdn.weeb.sh/images/ry3pQGraW.gif",
      "https://cdn.weeb.sh/images/rJAlbgXsb.gif",
      "https://cdn.weeb.sh/images/Hk1sxlQjZ.gif",
      "https://cdn.weeb.sh/images/r1Vk-x7sZ.gif",
      "https://cdn.weeb.sh/images/HJmbWxmiZ.gif",
      "https://cdn.weeb.sh/images/S1o6egmjZ.gif",
      "https://cdn.weeb.sh/images/H1gYelQjZ.gif",
      "https://cdn.weeb.sh/images/HkutgeXob.gif",
      "https://cdn.weeb.sh/images/ByWuR1q1M.gif",
      "https://cdn.weeb.sh/images/rkNgZlXi-.gif",
      "https://cdn.weeb.sh/images/BJXRmfr6-.gif",
      "https://cdn.weeb.sh/images/Sys3xg7jW.gif",
      "https://cdn.weeb.sh/images/ry00lxmob.gif",
      "https://cdn.weeb.sh/images/H1hige7sZ.gif"
    ];
    var image = Math.floor(Math.random() * images.length);
    let user = message.mentions.users.first();

    if (!user) return message.reply("You need to mention someone to nom them");

    if (user.id === message.author.id) {
      message.channel.send("You cant nom yourself");
    } else {
      let random = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(
          `${message.author.username} Noms ${
            message.mentions.users.first().username
          }Yumm~~`
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
