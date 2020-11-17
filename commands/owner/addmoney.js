const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const Discord = require("discord.js");
module.exports = {

    name: "addmoney",
    aliases: ["am"],
    category: "economy",
    description: "Adds coin to a user",
    usage: "[ mention | ID]",
    accessableby: "Administrator, Owner",

    run: async(bot, message, args) => {
         if (!["678555030038511627", "690539494473990204", "736926825028255744"].includes(message.author.id)) {
            const embed = new Discord.MessageEmbed()
                .setAuthor("Oops! This is Locked.", message.author.displayAvatarURL({ dynamic: true }))
            .setColor('#FF0000')
            return message.channel.send(embed);
        }

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send("**Enter A Valid User!**")
        if (!args[1]) return message.channel.send("**Please Enter A Amount!**")
        if (isNaN(args[1])) return message.channel.send(`**<:cross1:728616792477401150> Your Amount Is Not A Number!**`);
        if (args[0] > 10000) return message.channel.send("**Cannot Add That Much Amount!**")
        db.add(`money_${user.id}`, args[1])
        let bal = db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`:dollar: Added ${args[1]} Dollar\n\nNew Balance: ${bal}`);
        message.channel.send(moneyEmbed)

    }
}