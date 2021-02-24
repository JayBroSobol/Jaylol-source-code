module.exports = {
    name: 'youtube',
    description: "send you the yt link",
    execute(client, message, args){
        message.channel.send('https://www.youtube.com/channel/UC3SziOf56k44K9UxDrGXFqQ');
    }
}