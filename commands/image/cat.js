const superagent = require("superagent");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "cat",
  category: "images",
  aliases: ["chirp"],
  usage: ["cat"],
  description: "Get a images of a cat",
  run: async (client, message, args) => {
    let msg = await message.channel.send(
      "<a:loaddinng:727863137121992706> Generating Cat..."
    );
    if (
      !message.channel.guild.me.hasPermission("EMBED_LINKS") ||
      !message.guild.me.hasPermission("EMBED_LINKS" || "ADMINISTRATOR")
    ) {
      await message.channel.send(
        "<:cross1:728616792477401150> | I am missing `EMBED_LINKS` Permissions"
      );
      msg.delete();
      return;
    }

    let { body } = await superagent.get("https://some-random-api.ml/img/cat");

    let fact = await superagent.get("https://some-random-api.ml/facts/cat");

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
