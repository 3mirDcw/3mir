//AFK Komutu (komutlar/afk.js) | RC - Real Code

const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
   if (!args[0]) return msg.channel.send({embed: {
       color: Math.floor(Math.random() * (0xFFFFFF + 1)),
       description: (`:no_entry_sign:AFK nedenini gir.`)
 }});
  let name = msg.author.username
  if(msg.author.username.startsWith("[AFK]")){
    msg.reply("Zaten AFK'sın.")
  }
  else {
    msg.reply("Artık AFK'sın.")
     msg.member.setNickname(`[AFK]${msg.author.username}`);
  }  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'AFK olmanızı sağlar.',
  usage: 'afk <sebep>'
};

//Geldim Komutu (komutlar/geldim.js) | RC - Real Code

const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setTitle("Afk Modu! \n")
  .setColor("RANDOM")
  .addField('Şu Kullanıcı Artık Afk Değil! =>', message.author.username + '#' + message.author.discriminator)
  .setFooter('BOTISMI', client.user.avatarURL)
  message.delete();


  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'geldim',
  description: 'Afk Modundan çıkmanı sağlar.',
  usage: 'geldim'
};