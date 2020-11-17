const superagent = require("superagent");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "fox",
  category: "images",
  aliases: [],
  usage: ["fox"],
  description: "Get images & facts on fox's",
  run: async (client, message, args) => {
    let msg = await message.channel.send(":loaddinng: Generating Fox...");
    if (
      !message.channel.guild.me.hasPermission("EMBED_LINKS") ||
      !message.guild.me.hasPermission("EMBED_LINKS" || "ADMINISTRATOR")
    ) {
      await message.channel.send(
        ":cross1: | I am missing `EMBED_LINKS` Permissions"
      );
      msg.delete();
      return;
    }
    //NOOB BEE
    let { body } = await superagent.get("https://some-random-api.ml/img/fox");

    let fact = await superagent.get("https://some-random-api.ml/facts/fox");

    if (!{ body })
      return message.channel.send("Faled to get an image. Try again.");

    let Membed = new MessageEmbed()
      .addField("Fact", fact.body.fact)
      .setImage(body.link)
      .setColor("#FD9401");

    await message.channel.send(Membed);
    msg.delete();
  }
};
