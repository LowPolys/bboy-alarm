const Discord = require('discord.js');
const bot = new Discord.Client();
const YTDL = require('ytdl-core')
const streamOptions = { seek : 0, volume : 1}



bot.on('voiceStateUpdate', (oldMember, newMember) => {
        let newUserChannel = newMember.voiceChannel
        let oldUserChannel = oldMember.voiceChannel


        if(oldUserChannel === undefined &&  newUserChannel !== undefined && newMember.id === '182255148922437634') {

            console.log("user joined");
            newMember.voiceChannel.join()
                .then(connection => {
                    const stream = YTDL('https://www.youtube.com/watch?v=jmBjZ-Kf6w0&t=3s', {filter : 'audioonly'});
                    const dispatcher = connection.playStream(stream, streamOptions)
            })
            .catch(console.error);
    }   else if(newUserChannel === undefined && oldMember.id === '182255148922437634'){
        
        console.log("user left");
        oldMember.voiceChannel.leave();
    }
})


bot.login('MzcwNzQ5OTI5MTYyOTMyMjI2.DMrnbA.RvK04gAlOdTKSytEDm-vJMVPLRo');
