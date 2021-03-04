// at the top of your file
const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: "this is a help command command!",
    execute(message, args) {

        let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));

            if (UserJSON[message.author.id]) {
                let WarningEmbed = new Discord.MessageEmbed();
                WarningEmbed.setTitle("**ERROR**");
                WarningEmbed.setDescription("You already started");
                message.channel.send(WarningEmbed);
                return;
            }

            UserJSON[message.author.id] = {
                bal: 0,
                lastclaim: 0,
                lastwork: 0,
                workers: 0,
            }
            Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));

            let SuccessEmbed = new Discord.MessageEmbed();
            SuccessEmbed.setTitle("**SUCCESS**");
            SuccessEmbed.setDescription("You have joined the economy! type -j help to get started");
            message.channel.send(SuccessEmbed);
            return;
        }
}
  