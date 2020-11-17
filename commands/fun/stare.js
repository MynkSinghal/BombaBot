const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "stare",
  category: "action",
  aliases: ["stare", "hf"],
  usage: ["staree @user"],
  description: "stare someone",
  run: async (client, message, args) => {
    var images = [
      "https://cdn.weeb.sh/images/B1tO8JYD-.gif",
      "https://cdn.weeb.sh/images/rkloLkYvW.gif",
      "https://cdn.weeb.sh/images/HJf681YDW.gif",
      "https://cdn.weeb.sh/images/BJ88vLvd-.gif",
      "https://cdn.weeb.sh/images/HyWnLyKPZ.gif",
      "https://cdn.weeb.sh/images/rJCYIktw-.gif",
      "https://cdn.weeb.sh/images/Hk768JtP-.gif",
      "https://cdn.weeb.sh/images/B1WpLJKwW.gif",
      "https://cdn.weeb.sh/images/rk23UyYP-.gif",
      "https://cdn.weeb.sh/images/HyYuG-CBf.gif"
    ];
    var image = Math.floor(Math.random() * images.length);
    let user = message.mentions.users.first();

    if (!user)
      return message.reply("You need to mention someone to stare at them");

    if (user.id === message.author.id) {
      message.channel.send("You cant stare at yourself");
    } else {
      let random = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(
          `${message.author.username} Looks directly into ${
            message.mentions.users.first().username
          }'s Eyes. Umm....`
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
