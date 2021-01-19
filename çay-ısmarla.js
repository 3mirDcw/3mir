const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let cayismar = args.slice(0).join(' ');
  if (cayismar.length < 1) return message.channel.send('Kime Çay Ismarlacağını Yazmadın!')
  const embed = new Discord.RichEmbed()
  .setAuthor('')
  .setColor("RED")
  .setDescription(`** ${cayismar}, ${message.author.username} Sana Sıcacık Bir Çay Ismarladı! Afiyet Olsun.**`)
  return message.channel.sendEmbed(embed);
};

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['çayısmar', 'çayısmarla', 'çay', 'beleşçay'],
    permLevel: 0,
  };
  
  exports.help = {
    name: 'çay-ısmarla',
    description: 'Etiketlediğiniz Kişiye Çay Ismarlarsınız',
    usage: 'çay-ısmarla @kullanıcı'
  };
//Kod Bahadır#8230 Tarafından Yazılmıştır. 
//RC - RealCode