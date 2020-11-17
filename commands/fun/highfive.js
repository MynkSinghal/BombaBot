const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "highfive",
  category: "action",
  aliases: ["highfive", "hf"],
  usage: ["highfive @user"],
  description: "highfive someone",
  run: async (client, message, args) => {
    var images = [
      "https://cdn.weeb.sh/images/rJYQt1mjZ.gif",
      "https://cdn.weeb.sh/images/ByRqqy7jb.gif",
      "https://cdn.weeb.sh/images/Hy_U1QBT-.gif",
      "https://cdn.weeb.sh/images/S1kKq1XiZ.gif",
      "https://cdn.weeb.sh/images/H1Lj9ymsW.gif",
      "https://cdn.weeb.sh/images/r1FWFyQob.gif",
      "https://cdn.weeb.sh/images/r1MMK1msb.gif",
      "https://cdn.weeb.sh/images/r1MMK1msb.gif",
      "https://cdn.weeb.sh/images/HkYzKyXjW.gif",
      "https://cdn.weeb.sh/images/HysYckQs-.gif"
    ];
    var image = Math.floor(Math.random() * images.length);
    let user = message.mentions.users.first();

    if (!user)
      return message.reply("You need to mention someone to highfive them");

    if (user.id === message.author.id) {
      message.channel.send("You cant highfive yourself");
    } else {
      let random = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(
          `${message.author.username} Gives ${
            message.mentions.users.first().username
          } a Highfive!`
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
