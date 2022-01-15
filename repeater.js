const Discord = require('discord.js');

const client = new Discord.Client();


client.once('ready', () => {
    console.log('trial1 is onlineeee!');
});

client.on('message', message =>{

    if(message.content.toLowerCase() === 'hello')
        message.channel.send('hey there');
    
    else if (message.content.toLowerCase() === 'hi harshal')
        message.reply('bhag bsdk');

        const specificUsers = ['698415831926964294']; // list of ids to detect
        const messages = ['lmaooo minecraft noob', 'who turns down minecraft difficulty and completes survival?', 'NO']; // list of messages to pick random from
        
        if (specificUsers.includes(message.author.id))
          // send random message from array
          return message.reply(
           messages[Math.floor(Math.random() * messages.length)]
          );
        

    
        var words = ["rohan", "bandu", "sabnis", "nafde"]
        for (var i=0; i < words.length; i++) {
        
         if (message.content.toLowerCase().includes(words[i])) {
        
            message.channel.send('why did you take a noobs name');
            return;
        
         }
        
        }
});



client.login('OTMxODM1MDMzNTM3MzUxNjgw.YeKNAA.jwGHLEQJYpNd8_8D55goZeSkCJg');
