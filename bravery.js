const Discord = require('discord.js')

exports.run = (client, message) => {
    const embed = new Discord.RichEmbed()
    .setImage(`http://18.184.116.22/api/cerceve?cerceve=bravery2&url=${message.author.avatarURL}`)
    .setColor(0xff7f00)
    return message.channel.send(embed)
 };
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
 
  exports.help = {
    name: 'bravery',
    description: 'bravery1',
    usage: 'bravery'
  };