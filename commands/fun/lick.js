const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "lick",
  category: "action",
  aliases: ["lick"],
  usage: ["lick @user"],
  description: "lick someone",
  run: async (client, message, args) => {
    var images = [
      "https://cdn.weeb.sh/images/Bkagl0uvb.gif",
      "https://cdn.weeb.sh/images/S1QzRJp7z.gif",
      "https://cdn.weeb.sh/images/HJRRyAuP-.gif",
      "https://cdn.weeb.sh/images/H13HS7S6-.gif",
      "https://cdn.weeb.sh/images/ryGpGsnAZ.gif",
      "https://cdn.weeb.sh/images/rkBbBQS6W.gif",
      "https://cdn.weeb.sh/images/Hkknfs2Ab.gif",
      "https://cdn.weeb.sh/images/H1EJxR_vZ.gif",
      "https://cdn.weeb.sh/images/rJ6hrQr6-.gif",
      "https://cdn.weeb.sh/images/Bkxge0uPW.gif",
      "https://cdn.weeb.sh/images/BkvTBQHaZ.gif"
    ];
    var image = Math.floor(Math.random() * images.length);
    let user = message.mentions.users.first();

    if (!user) return message.reply("You need to mention someone to lick them");

    if (user.id === message.author.id) {
      message.channel.send("You cant lick yourself");
    } else {
      let random = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(
          `${message.author.username} Licks ${
            message.mentions.users.first().username
          } How does it taste? -.-`
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
