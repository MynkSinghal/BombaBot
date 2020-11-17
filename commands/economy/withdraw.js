const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "withdraw",
  aliases: ["wd"],
  category: "economy",
  description: "Withdraws Money From Bank",
  usage: "<amount>",

  run: async (bot, message, args) => {
    let user = message.author;

    let member2 = db.fetch(`bank_${user.id}`);

    if (args.join(" ").toLocaleLowerCase() == "all") {
      let money = await db.fetch(`bank_${user.id}`);
      let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:bombacross:764545831285817374> **Bruhhhh You Do Not Have Any Money To Withdraw!**`);
      if (!money) return message.channel.send(embed);
      db.subtract(`bank_${user.id}`, money);
      db.add(`money_${user.id}`, money);
      let embed5 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:checkedbomba:777869968121135124> You have withdrawn all your Dollar from your bank, its Empty Hehe`);
      message.channel.send(embed5);
    } else {
      let embed2 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:bombacross:764545831285817374> Specify an amount you want to withdraw!`);

      if (!args[0]) {
        return message.channel.send(embed2);
      }
      let embed6 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:bombacross:764545831285817374> make Sure amount is a Number!`);

      if (isNaN(args[0])) {
        return message.channel.send(embed6);
      }
      let embed3 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:bombacross:764545831285817374> Withdrawls cant be negative!`);

      if (message.content.includes("-")) {
        return message.channel.send(embed3);
      }
      let embed4 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:bombacross:764545831285817374> You don't have that much money in the bank!`);

      if (member2 < args[0]) {
        return message.channel.send(embed4);
      }

      let embed5 = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
          `<:checkedbomba:777869968121135124> You have withdrawn ${args[0]} Dollar from your bank!`
        );

      message.channel.send(embed5);
      db.subtract(`bank_${user.id}`, args[0]);
      db.add(`money_${user.id}`, args[0]);
    }
  }
};
