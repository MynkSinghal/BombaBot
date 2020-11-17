const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "deposit",
  aliases: ["dep"],
  category: "economy",
  description: "Deposits money to bank",
  usage: "<amount>",
  accessableby: "everyone",

  run: async (bot, message, args) => {
    let user = message.author;

    let member = db.fetch(`money_${user.id}`);

    if (args[0] == "all") {
      let money = await db.fetch(`money_${user.id}`);

      let embedbank = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription("<:bombacross:764545831285817374> You don't have any money to deposit");

      if (!money) return message.channel.send(embedbank);

      db.subtract(`money_${user.id}`, money);
      db.add(`bank_${user.id}`, money);
      let sembed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:checkdollarbomba:777868122685833287> You have deposited all your Dollar into your bank`);
      message.channel.send(sembed);
    } else {
      let embed2 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:bombacross:764545831285817374> Please Specify an amount to deposit`);

      if (!args[0]) {
        return message.channel
          .send(embed2)
          .catch(err => message.channel.send(err.message));
      }
      let embed6 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:bombacross:764545831285817374> Bruhhhh! Enter a number only`);

      if (isNaN(args[0])) {
        return message.channel.send(embed6);
      }
      let embed3 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:bombacross:764545831285817374> Lmao, you cant deposit negative dollar`);

      if (message.content.includes("-")) {
        return message.channel.send(embed3);
      }
      let embed4 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:bombacross:764545831285817374> You are low on balance`);

      if (member < args[0]) {
        return message.channel.send(embed4);
      }

      let embed5 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
          `<:checkedbomba:777869968121135124> You have deposited ${args[0]} <:checkdollarbomba:777868122685833287> into your bank`
        );

      message.channel.send(embed5);
      db.subtract(`money_${user.id}`, args[0]);
      db.add(`bank_${user.id}`, args[0]);
    }
  }
};


//suno mayank
//bolo coins nehi saaare dollar hai
//ok ok fish ko store mein add karna hai
//nhi, bekaar h
//fish js me aa jaao haan ohii toh lol store mein add nehi hai fish wala ohii add karna hai 


