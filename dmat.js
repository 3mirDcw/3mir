const Discord = require('discord.js');
exports.run = function(client, message, args) {
    if (message.author.id === "KENDİ ID") {
    let dmkisi = message.mentions.users.first();
    if (!dmkisi) return message.channel.send(':x: **DM Atacağın Kişiyi Seçmelisin**');
    let dm = args.slice(1).join(' ');
    if (!dm) return message.channel.send(':x: **DM Atcağım Yazıyı Unuttun!**');
    message.delete();
    const dmat = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Merhaba Sana Birisinden DM Var!')
    .addField('DM Atan :', `➽ <@${message.author.id}>`)
    .addField('DM İse :', `➽ ${dm}`)
    .setFooter('DM | BOTISMI')
    dmkisi.sendEmbed(dmat);
    const dmtamam = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('İşlem Tamamlandı :white_check_mark:')
    .setFooter('DM | BOTISMI')
    message.channel.sendEmbed(dmtamam);
    } else {
        message.channel.send(':x: **Bu Komutu Sadece Yapımcım Kullanabilir!**');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["dm"],
  permLevel: 0
};

exports.help = {
  name: 'dmat',
  description: 'DM ATARSINIZ.',
  usage: 'dmat @kullanıcı mesaj'
};
//Bu komut Bahadır#8230 tarafından DÜZENLENMİŞTİR (ben yazmadım sadece düzenledim)
//RC - Real Code