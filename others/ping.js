const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `ping`,
  description: `Daje ci ping od bota`,
  aliases: ["latency"],
  cooldown: 2,
  edesc: "Wpisz tę komendę, aby sprawdzić, jak szybko Bot może odpowiadać na Twoje wiadomości/komendy!",
  execute(message, args, client) {
    //react with approve emoji
    message.react("✅");
    //send the Ping embed
    message.reply(new MessageEmbed().setColor("#F0EAD6").setTitle(":ping_pong: `" + client.ws.ping + "ms`"));
  }
}