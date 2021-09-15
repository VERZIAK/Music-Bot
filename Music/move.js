require('array.prototype.move');
const { canModifyQueue } = require("../util/nkm");

module.exports = {
  name: "move",
  aliases: ["mv"],
  description: "Przesuwaj utwory w kolejce.",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("Nie ma nic w kolejce.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!args.length) return message.reply(`Uzyj: ${message.client.prefix}move <Queue Number>`);
    if (isNaN(args[0])) return message.reply(`Uzyj: ${message.client.prefix}move <Queue Number>`);

    let songMoved = queue.songs[args[0] - 1];

    queue.songs.move(args[0] - 1, 1);
    queue.textChannel.send(`${message.author} 🚚 przewinął **${songMoved.title}**.`);
  }
};