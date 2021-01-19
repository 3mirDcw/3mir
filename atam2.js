exports.run = async (bot, message, args) => {
    var request = require('request');
     var Discord = require('discord.js')
    
   
   request('https://api.eggsybot.xyz/ataturk', function (error, response, body) {
       if (error) return console.log('Hata:', error); 
       else if (!error) { 
         var info = JSON.parse(body)
         let embed = new Discord.RichEmbed()
          .setDescription('Atam ❤')
          .setImage(info.link)
          .setColor(0x1D82B6)
           
           message.channel.send(embed); 
       }
   });
     
     
   }
   exports.help = {
    name:"atatürk" 
   }