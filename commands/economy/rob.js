const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
  
    name: "rob",
    noalias: [""],
    category: "economy",
    description: "Robs someone",
    usage: "[username | nickname | mention | ID]",
    accessableby: "everyone",
  
  run: async (bot, message, args) => {
    if (!args[0]) return message.channel.send("**Enter A Name!**")  
    let user2 = message.author

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase());
    if (!user) return message.channel.send("**Enter A Valid User!**")

    let embed2 = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`<:bombacross:764545831285817374> You cannot rob yourself kiddo`)

    if (user.user.id === message.author.id) {
      return message.channel.send(embed2)
    }

    let targetuser = await db.fetch(`money_${user.id}`)
    let author = await db.fetch(`rob_${user.id}`)
    let author2 = await db.fetch(`money_${user2.id}`)

    let timeout = 600000;

    if (author !== null && timeout - (Date.now() - author) > 0) {
      let time = ms(timeout - (Date.now() - author));

      let timeEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:bombacross:764545831285817374> You have already robbed someone recently \n\nTry robbing again in ${time.minutes}m ${time.seconds}s `);
      message.channel.send(timeEmbed)
    } else {

      let moneyEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:bombacross:764545831285817374> You need atleast 100 Dollar in your wallet to rob someone`);

      if (author2 < 100) {
        return message.channel.send(moneyEmbed)

      }
      let moneyEmbed2 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:bombacross:764545831285817374> ${user.user.username} does not have anything you can rob`);

      let random = Math.floor((Math.random() * 100)) + 1;

      if (targetuser < random) {
        return message.channel.send(moneyEmbed2)
      } else {

        let embed = new MessageEmbed()
          .setDescription(`<:checkedbomba:777869968121135124> You robbed ${user.user.username} and got away with ${random} Dollar <:checkdollarbomba:777868122685833287>`)
          .setColor("RANDOM")
        message.channel.send(embed)

        db.subtract(`money_${user.id}`, random)
        db.add(`money_${user2.id}`, random)
        db.set(`rob_${user.id}`, Date.now())

      }
    };
  }
} 