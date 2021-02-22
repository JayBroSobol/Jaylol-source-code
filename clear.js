// at the top of your file
const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    description: "Clear messages!",
   async  execute(message, args) {

     const Embed = new Discord.MessageEmbed()
     .setColor('#0099ff')
     .setTitle('-j (amount you want to clear)')
     .addFields(
        { name: 'error', value: 'do the top' },

     )
     .setTimestamp()
     .setFooter('There are many secret commands', 'https://pbs.twimg.com/media/EkyxQ-XWkAQ0Fdh.jpg');

       if(message.member.roles.cache.has('753021371361263787')) {
           
        if (!args[0]) return message.reply(Embed);
 
        if(isNaN(args[0])) return message.reply("Please type a real number!");
 
        if(args[0] > 100) return message.reply("You can't remove more than 100 messages!");
        
        if(args[0] < 1) return message.reply("You have to delete at least one message!");
 
        await message.channel.messages.fetch({ limit: args[0]+1}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
       } else{
           message.channel.send('You dont have the right perms')
       }
    

    
    
 
 }
}   