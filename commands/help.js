// at the top of your file
const Discord = require('discord.js');


module.exports = {
    name: 'help',
    description: "this is a help command command!",
    execute(message, args) {
        // inside a command, event listener, etc.
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Help!')
            .setURL('https://www.youtube.com/channel/UC3SziOf56k44K9UxDrGXFqQ')
            .setAuthor('JayLol', 'https://i.ytimg.com/vi/LfLUxq2cVUo/hqdefault.jpg', 'https://www.youtube.com/channel/UC3SziOf56k44K9UxDrGXFqQ')
            .setDescription('Here is some commands!')
            .setThumbnail('https://64.media.tumblr.com/6389d3ce19b09e3c5b4a16b60bfefe29/a76a10c6f6358d06-62/s250x400/a9a0547499acc3bc03240d0b8fe6490a69e792af.jpg')
            .addFields(
                { name: '-j ping', value: 'Tests the bot to see if it is working' },
                { name: '\u200B', value: '\u200B' },
                { name: '-j help', value: 'Brings up help', inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: '-j deadchat', value: 'xD', inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: '-j youtube', value: 'Pipys yt!', inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: '-j ban', value: 'Bans a member, staff only', inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: '-j kick', value: 'Kicks a member, staff only', inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: '-j mute', value: 'Mute a member, staff only', inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: '-j unmute', value: 'Unmutes a member, staff only', inline: true },


            )
            .addField('Pog', 'Ferret', true)
            .setImage('https://pbs.twimg.com/media/EVcHklKXkAAb8-U.jpg:large')
            .setTimestamp()
            .setFooter('There are many secret commands', 'https://pbs.twimg.com/media/EkyxQ-XWkAQ0Fdh.jpg');

        message.channel.send(exampleEmbed);
    }
}



