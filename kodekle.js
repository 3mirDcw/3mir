const Discord = require('discord.js');

exports.run = (client, message, args) => {
 
  let kodismi = args.slice(0).join('');
    let kodbilgi = args.slice(1).join('')
  let tür = args.slice(2).join('');
  let kodlinki = args.slice(3).join('');
  if (kodismi.length < 1) return message.reply('Kodun İsmini Yazmadın!');
  if (tür.length < 2) return message.reply('Kodun Türünü Yazmadın!');
  if (kodbilgi.length < 3) return message.reply('Kodun Hakkında Bilgi Vermedin! (1 Kelime)');
  if (kodlinki.length < 4) return message.reply('Kodun Linkini Atmadın!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("0x36393E")
    .setThumbnail(message.guild.iconURL)
    .addField(`⌨️ Kod İsmi`, `** ${args[0]} **`, true)
    .addField(`❔ Bilgi`, `** ${args[1]} **`, true)
    .addField(`<:nodejs512:606028827612676096> Tür`, `** ${args[2]} **`, true)
    .addField(`👑 Paylaşan`, `**${message.author.tag}**`, true)
    .addField(`🌍 Kod Linki`, `**[Koda Git](${args[3]})**`, true)
.setFooter(message.guild.name, message.guild.iconURL
        )

   return message.channel.sendEmbed(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kodpaylaş', 'kod-paylaş', 'yenikod'],
  permLevel: 3
};

exports.help = {
  name: 'kodekle',
  description: 'Kod Paylaşırsınız',
  usage: 'kodekle kodismi neişeyarar türü kodlinki'
};
//Kod Bahadır#8230 Tarafından Yazılmıştır. 
//RC - RealCode
