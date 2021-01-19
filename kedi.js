const { RichEmbed } = require('discord.js');
const superagent = require('superagent');


module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get("https://aws.random.cat/meow"); 
  
   let dogembed = new RichEmbed()
    .setDescription('Meov Meov 🐱')
    .setColor('#ff6a00)
    .setImage(body.file)
 
   message.channel.send(dogembed)
}
module.exports.help = {
  name:"kedi"
}