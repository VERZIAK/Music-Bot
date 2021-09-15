const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Zaproś bota na swój serwer.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Zaproś bota na swój serwer!")
      .setDescription("Lubisz korzystać z tego bota? Zaproś go na serwer!")
      .setColor("#F0EAD6")
      .setAuthor('Me','https://cdn.discordapp.com/attachments/860167474392727594/860547389647355914/Madtown_logo_pfp.jpg')
      .setThumbnail(message.guild.iconURL())
      .addField(`Użyj tego linka, aby zaprosić bota na swój serwer`, 'https://discord.com/api/oauth2/authorize?client_id=887701905898340362&permissions=0&scope=bot', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};