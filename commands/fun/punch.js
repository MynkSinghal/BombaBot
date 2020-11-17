const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "punch",
    category: "action",
    aliases: ["punch", "hit"],
    usage: ["punch,hit @user"],
    description: "punch or hit someone",
run: async (client, message, args) => {
  var images = [
"https://cdn.weeb.sh/images/BkdyPTZWz.gif",
  "https://cdn.weeb.sh/images/HJfGPTWbf.gif",
    "https://cdn.weeb.sh/images/BJXxD6b-G.gif",
    "https://cdn.weeb.sh/images/rJRUk2PLz.gif",
    "https://cdn.weeb.sh/images/SJR-PpZbM.gif",
    "https://cdn.lowgif.com/small/1424479b463a88b2-anime-sigh-gif-8-gif-images-download.gif",
    "https://cdn.weeb.sh/images/ryYo_6bWf.gif",
    "https://cdn.weeb.sh/images/B1-ND6WWM.gif",
    "https://cdn.weeb.sh/images/SJvGvT-bf.gif",
    "https://cdn.weeb.sh/images/B1rZP6b-z.gif",
    "https://cdn.weeb.sh/images/HykeDaZWf.gif"];
var image = Math.floor(Math.random() * images.length);
  let user = message.mentions.users.first()
    if (!user) return message.reply("You need to mention someone to punch them");
    
  
  if(user.id === message.author.id) {
    message.channel.send("You cant punch yourself")
  } else {
    
    let random = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${message.author.username} punch ${message.mentions.users.first().username}so hard!`)
    .setImage(String([images[image]]))
    .setFooter(`Developer BombaBot Team`, 'https://media.discordapp.net/attachments/752989370511786147/757229853283057732/source.gif?width=677&height=441')
    message.channel.send(random);
  }
}
} 