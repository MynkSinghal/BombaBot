const ms = require("ms");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "tempmute",
  aliases: [],
  category: "moderation",
  description: "Mute a user for a time period",
  usage: ["tempmute <user> <time>"],
  run: async (client, message, args) => {
    if (
      !message.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR") ||
      !message.guild.owner
    )
      return message.channel
        .send("Sorry but You don't have the `Manage_Messages` premission")
        .then(m => m.delete({ timeout: 10000 }));
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR"))
      return message.channel.send(
        "Sorry but IM missing permissios `Manage_Messages`"
      );

    let mutee =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!mutee)
      return message.channel.send(
        "Please mention the user that you want to mute"
      );

    if (mutee.id === message.author.id)
      return message.reply(`You can't mute yourself ${message.author.tag}`);

    if (mutee.roles.cache.find(r => r.name === "Muted"))
      return message.reply(`You can't mute thsi `);
    // let reason = args.slice(2).join(" ");
    let reason = args.slice(2).join(" ");
    if (!reason) reason = "No reason given";

    //define mute role and if the mute role doesnt exist then create one
    let Mrole = message.guild.roles.cache.find(r => r.name === "Muted");
    if (!Mrole) {
      try {
        Mrole = await message.guild.roles.create({
          data: {
            name: "Muted",
            color: "#000000",
            Permissions: []
          }
        });

        message.guild.channels.cache.forEach(async channel => {
          channel.overwritePermissions([
            {
              id: Mrole.id,
              deny: ["SEND_MESSAGES", "ADD_REACTIONS", "STREAM", "SPEAK"],
              allow: ["CONNECT"]
            }
          ]);
        });
      } catch (e) {
        console.log(e.stack);
      }
    }

    //add role to the mentioned user and also send the user a dm explaing where and why they were muted
    let time = args[1];
    if (!time)
      return message.channel.send(
        "If your not going to add a time just use `mute` command"
      );

    mutee.roles.add(Mrole.id).then(() => {
      let addrole = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setColor("#00ff00")
        .setFooter("", message.author.displayAvatarURL())
        .setTimestamp()
        .addField("Hello, you have been muted in", message.guild.name)
        .addField("Reason", reason)
        .addField("Time", ms(ms(time)));
      mutee.send(addrole);
    });
    setTimeout(function() {
      mutee.roles.remove(Mrole.id);
      mutee.send(`You have been unmuted from \`${message.guild.name}\``);
    }, ms(time));

    message.channel.send(
      `${mutee.user.tag} has been muted for \`${ms(ms(time))}\``
    );
  }
};
