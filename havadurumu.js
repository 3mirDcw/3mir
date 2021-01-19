const Discord = require("discord.js");
const weather = require('../weather');
module.exports.run =  (bot, message, args) => {
  if (!args[0]) return message.channel.send({embed: {
       color: Math.floor(Math.random() * (0xFFFFFF + 1)),
       description: (`Hava durumunu öğrenmek istediğiniz şehiri yazınız!`)

 }});
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
            if (err) message.channel.send({embed: {
       color: Math.floor(Math.random() * (0xFFFFFF + 1)),
       description: (`**HATA**: ${err}`)

 }});
            if (!result) {
                message.channel.send({embed: {
       color: Math.floor(Math.random() * (0xFFFFFF + 1)),
       description: (`Aradığınız şehir bulunamadı!`)

 }})
                return;
            }
            var current = result[0].current;
            var location = result[0].location;
            const embed = new Discord.RichEmbed()
                .setTimestamp()
                .setAuthor(`» ${current.observationpoint} | Hava Durumu Bilgisi «`, current.imageUrl)
                .setThumbnail(current.imageUrl)
                .setColor("RANDOM")
                .addField('⛅️Durum', `${current.skytext}`)
                .addField('🌡Sıcaklık',`${current.temperature} Derece`)
                .addField('🌆Hissedilen Sıcaklık',`${current.feelslike} Derece`)
                .addField('☁️Rüzgar',current.winddisplay)
                .addField('💨Rüzgar Hızı',current.windspeed)
                .addField('💧Nem', `${current.humidity}%`)
                message.channel.send({embed});
        });
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['havadurumu'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'hava-durumu',
  category: 'kullanıcı',
  description: 'İstediğiniz şehrin hava durumunu gösterir.',
  usage: 'hava-durumu'
};
