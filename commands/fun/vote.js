const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "vote",
  category: "info",
  aliases: ["vote"],
  usage: ["info"], //fthis usage mtfff
  description: "Get Invite Link for xoxo",
  run: async (client, message, args) => {
    let botVersion = "1.0.0";

    function deraton(ms) {
      const min = Math.floor((ms / (1000 * 60)) % 60).toString();
      const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString();
      const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString();
      return `${days.padStart(1, "0")} days, ${hrs.padStart(
        2,
        "0"
      )} hours, ${min.padStart(2, "0")} minutes, `;
    }
    const embed = new MessageEmbed()
      // .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
      .setAuthor("Thank you for voting BombaBot",)
      .addField(
        "Vote",
        "<:checkedbomba:777869968121135124>➽[Click Here](https://top.gg/bot/730307957081768037/vote) to vote BombaBot."
      )

      .setColor("RANDOM")
      .setFooter("Thank you for supporting BombaBot!",)
      .setTimestamp();
    if (
      message.channel.guild.me.hasPermission("EMBED_LINKS") ||
      message.guild.me.hasPermission("EMBED_LINKS" || "ADMINISTRATOR")
    ) {
      message.channel.send(embed);
    } else {
      message.channel.send(
        `**Uptime**: ${deraton(
          client.uptime
        )}\n**Useful Link**\n- Discord Server: https://discord.gg/guEt8ck\n**Developers**: \n**Version**: ${botVersion}\n`
      );
    }
  },
  aliases: ["bot", "botinfo"]
};
