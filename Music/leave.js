module.exports = { 
    name: "leave", 
    description: "Wychodze z kanału", 
    execute(message) {
         const { channel } = message.member.voice; 
         const serverQueue = message.client.queue.get(message.guild.id); 
         if (!channel) return message.reply("Musisz być pierwsze na kanale!").catch(console.error); 
         if (!message.guild.me.voice.channel) return message.reply("Nie jestem na kanale!").catch(console.error); 
         if (channel.id !== message.guild.me.voice.channel.id) return message.reply("Nie jestem na twoim kanale!").catch(console.error); 
         if(serverQueue) { 
             serverQueue.connection.dispatcher.destroy(); 
             channel.leave(); 
             message.client.queue.delete(message.guild.id); 
             serverQueue.textChannel.send('Opuściłem kanał. Do zobaczenia.').catch(console.error); 
             return 
            }
            channel.leave(); 
            
    message.client.queue.delete(message.guild.id); 
    message.channel.send('Opuściłem kanał. Do zobaczenia.').catch(console.error); } };