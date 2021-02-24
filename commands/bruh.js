module.exports = {
    name: 'bruh',
    description: "flips you off",
    execute(client, message, args){
        var ran = Math.random()

        if (ran > 0.5){
            message.channel.send('That is a bruh moment');

        } else{
            message.channel.send('That is not a bruh moment')
        }
        
    }
}