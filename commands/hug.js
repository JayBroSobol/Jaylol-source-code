// at the top of your file
const Discord = require('discord.js');


module.exports = {
    name: 'hug',
    description: "this is a help command command!",
    execute(client, message, args, Discord) {
        // inside a command, event listener, etc.
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Hug')
            .setDescription('you need it')
            .setThumbnail('https://images.theconversation.com/files/367663/original/file-20201105-15-1krcvwp.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop')
            .addFields(
                { name: 'hugs', value: 'help' },

            )
            .setImage('http://www.adventisthealth.org/images/blog/hugs.jpg')
            .setTimestamp()
            .setFooter('There are many secret commands', 'https://pbs.twimg.com/media/EkyxQ-XWkAQ0Fdh.jpg');

        message.channel.send(exampleEmbed);
    }
}
