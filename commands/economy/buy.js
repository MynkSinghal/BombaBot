//aa gye? hmm
//isme kya change krna h? daily me aao


const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const { PREFIX } = require("../../config");

module.exports = {
  name: "buy",
  noalias: [""],
  category: "economy",
  description: "buys items",
  usage: "[item]",
  accessableby: "everyone",

  run: async (bot, message, args) => {
    let user = message.author;

    let prefix;
    let fetched = await db.fetch(`prefix_${message.guild.id}`);

    if (fetched === null) {
      prefix = PREFIX;
    } else {
      prefix = fetched;
    }

    let author = db.fetch(`money_${user.id}`);

    let Embed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`<:bombacross:764545831285817374> You need 200 Dollar to purchase Bronze VIP`);

    if (args.join(" ").toLocaleLowerCase() == "bronze") {
      if (author < 200) return message.channel.send(Embed);

      await db.fetch(`bronze_${user.id}`);
      db.set(`bronze_${user.id}`, true);

      let Embed2 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
          `<:checkedbomba:777869968121135124> Purchased Bronze VIP For 200 Dollar <:checkdollarbomba:777868122685833287>`
        );

      db.subtract(`money_${user.id}`, 200);
      message.channel.send(Embed2);
    } else if (args.join(" ").toLocaleLowerCase() == "nikes") {
      let Embed3 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:bombacross:764545831285817374> You need 600 Dollar to purchase some Nikes`);

      if (author < 600) return message.channel.send(Embed3);

      await db.fetch(`nikes_${user.id}`);
      db.add(`nikes_${user.id}`, 1);

      let Embed4 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
          `<:checkedbomba:777869968121135124> Purchased Fresh Nikes For 600 Dollar <:checkdollarbomba:777868122685833287>`
        );

      db.subtract(`money_${user.id}`, 600);
      message.channel.send(Embed4);
    } else if (args.join(" ").toLocaleLowerCase() == "car") {
      let Embed5 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:bombacross:764545831285817374> You need 800 Dollar to purchase a new car`);

      if (author < 800) return message.channel.send(Embed5);

      await db.fetch(`car_${user.id}`);
      db.add(`car_${user.id}`, 1);

      let Embed6 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
          `<:checkedbomba:777869968121135124> Purchased A New Car For 800 Dollar :<:checkdollarbomba:777868122685833287>`
        );

      db.subtract(`money_${message.guild.id}_${user.id}`, 800);
      message.channel.send(Embed6);
    } else if (args.join(" ").toLocaleLowerCase() == "mansion") {
      let Embed7 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:bombacross:764545831285817374> You need 1200 Dollar to purchase a Mansion`);

      if (author < 1200) return message.channel.send(Embed7);

      await db.fetch(`house_${user.id}`);
      db.add(`house_${user.id}`, 1);

      let Embed8 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
          `<:checkedbomba:777869968121135124> Purchased A Mansion For 1200 Dollar <:checkdollarbomba:777868122685833287>`
        );

      db.subtract(`money_${user.id}`, 1200);
      message.channel.send(Embed8);
    } else {
      if (message.content.toLowerCase() === `${prefix}buy`) {
        let embed9 = new MessageEmbed()
          .setColor("RANDOM")
          .setDescription(
            `<:bombacross:764545831285817374>  Enter An Item To Buy!\nType ${prefix}store To See List Of Items!`
          );
        return message.channel.send(embed9);
      }
    }
  }
};


//come to daily.js okh wait
