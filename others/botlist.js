const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `botlist`,
  description: `Wyświetl listę botów`,
  aliases: [],
  cooldown: 3,
  edesc: "Wpisz to polecenie, aby wyświetlić listę wszystkich botów na serwerze, na którym znajduje się bot. Proszę zagłosować tam UwU",
  execute(message, args, client) {
    //react with approve emoji
    message.react("✅");
    //send the botlist embed
    message.reply(new MessageEmbed().setColor("#F0EAD6")
    .setTitle("BOT W TRAKCIE BETA!")
   .addField("top.gg", "BOT W TRAKCIE BETA!")
    .addField("Matrixbots","BOT W TRAKCIE BETA!")
    .addField("bots.ondiscord","BOT W TRAKCIE BETA!")
    .addField("discordbotlist","BOT W TRAKCIE BETA!")
    .addField("666","BOT W TRAKCIE BETA!")
    );

  }
}