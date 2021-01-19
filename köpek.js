const { RichEmbed } = require('discord.js');
const superagent = require('superagent');


module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get("https://random.dog/woof.json"); 
  
   let dogembed = new RichEmbed()
    .setDescription('Hav Hav 🐶')
    .setColor('#ff6a00')
    .setImage(body.url)
   
   message.channel.send(dogembed)
}
module.exports.help = {
  name:"köpek"
}