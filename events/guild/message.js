const { Client } = require("discord.js");

module.exports = (Discord, client, message) =>{
    const prefix = '-j ';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);
    console.log("Invoking execute!");
    //console.log(message);
    if(command) command.execute(client, message, args, Discord);
    
} 