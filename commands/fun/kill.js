const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "kill",
  category: "action",
  aliases: ["kill"],
  usage: ["kill @user"],
  description: "kill someone",
  run: async (client, message, args) => {
    var images = [
      "https://cdn.weeb.sh/images/HyXTiyKw-.gif",
      "https://cdn.weeb.sh/images/B1qosktwb.gif",
      "https://cdn.weeb.sh/images/B1VnoJFDZ.gif",
      "https://cdn.weeb.sh/images/r11as1tvZ.gif",
      "https://cdn.weeb.sh/images/BJO2j1Fv-.gif",
      "https://media1.tenor.com/images/0bccc455e6793a4bfe0d1b27fef3e661/tenor.gif?itemid=17608658",
      "https://thumbs.gfycat.com/ViciousFirsthandBeetle-size_restricted.gif",
      "https://imgur.com/ouX2mV6",
      "https://imgur.com/VM0TwyH",
      "https://66.media.tumblr.com/3c7c966dea8f11dee2c645a84180c33f/tumblr_pf7syag44Q1uhzwjbo1_400.gifv"
    ];
    var image = Math.floor(Math.random() * images.length);
    let user = message.mentions.users.first();

    if (!user) return message.reply("You need to mention someone to kill them");

    if (user.id === message.author.id) {
      message.channel.send("You cant kill yourself");
    } else {
      let random = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(
          `${message.author.username} killed ${
            message.mentions.users.first().username
          } RIP :(`
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
