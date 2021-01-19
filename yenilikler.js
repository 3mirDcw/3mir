const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const botbilgi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Yenilikler: \n**1** roller komutu eklendi! \n**2** d!kac-santim komutu eklendi! \n**3** d!rastgele-renk komutu eklendi! \n**4** d!nsfw komutu eklendi! \n**5** d!rol-ver komutu eklendi!');
    message.channel.sendEmbed(botbilgi) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Yenilikleri gösterir.',
  usage: 'yenilikler'
};