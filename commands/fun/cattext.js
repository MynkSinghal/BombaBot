const client = require("nekos.life");
const Discord = require("discord.js");
const neko = new client();

module.exports = {
  name: "cattext",
  category: "fun",
  aliases: [""],
  description: "sends owo nya cute anime waifu text stuff",
  usage: "[command]",
  async run(client, message, args) {
    async function work() {
      let owo = await neko.sfw.catText();
      message.channel.send(owo.cat).catch(error => {
        console.error(error);
      });
    }

    work();
  }
};
