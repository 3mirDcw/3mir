const Discord = require('discord.js');
const moment = require('moment');
exports.run = (message, args) => {
	let user;
	
    if (message.mentions.users.first()) {
      user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    } else {
        user = message.author;
    }
    
    var tarih = ''
			if(moment(user.createdAt).format('MM') === '01') {
				var tarih = `${moment(user.createdAt).format('DD')} Ocak ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '02') {
				var tarih = `${moment(user.createdAt).format('DD')} Şubat ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '03') {
				var tarih = `${moment(user.createdAt).format('DD')} Mart ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '04') {
				var tarih = `${moment(user.createdAt).format('DD')} Nisan ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '05') {
				var tarih = `${moment(user.createdAt).format('DD')} Mayıs ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '06') {
				var tarih = `${moment(user.createdAt).format('DD')} Haziran ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '07') {
				var tarih = `${moment(user.createdAt).format('DD')} Temmuz ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '08') {
				var tarih = `${moment(user.createdAt).format('DD')} Ağustos ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '09') {
				var tarih = `${moment(user.createdAt).format('DD')} Eylül ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '10') {
				var tarih = `${moment(user.createdAt).format('DD')} Ekim ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '11') {
				var tarih = `${moment(user.createdAt).format('DD')} Kasım ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
			if(moment(user.createdAt).format('MM') === '12') {
				var tarih = `${moment(user.createdAt).format('DD')} Aralık ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
			}
  
      const member = message.guild.member(user);
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(user.avatarURL)
      .addField(`${user.tag} Hesabının Kurulum Tarihi:`, `${tarih}`)
           message.channel.send({embed});
      }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hesapkurulum', 'sahte-algıla', 'yenihesapmı'],
  permLevel: 3
};

exports.help = {
  name: 'hesaptarih',
  description: ' Etiketlediğiniz Kişinin Hesap Kurulum Tarihini Gösterir',
  usage: 'hesaptarih @kullanıcı'
};
//Bazı yerler kullanıcı-bilgi.js komudundan alınmıştır.
//Kod Seinroth#8230 Tarafından Yazılmıştır. 
//RC - RealCode