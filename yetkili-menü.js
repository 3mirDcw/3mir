const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("YETKİLİ KOMUTLARI:",`
dve!ban:         ^Belirlediğiniz bir kullanıcıyı sunucudan kalıcı olarak atarsınız.^
dve!kur:         ^Bot için gerekli odaları kurar.^
dve!oylama:      ^Standart bir oylama yapmanızı sağlar.^
dve!reboot:      ^Botu yeniden yapmanızı sağlar.^
dve!sunucular:   ^Botun bulunduğu sunucuları gösterir.^
dve!tavsiye:     ^Bot'a tavsiye yollamanızı sağlar.^
dve!yaz:         ^Bot üzerinden yazı yazmanızı sağlar.^
dve!kilit:       ^Kanalı belirli bir süre kilitlemenizi sağlar.^

* örn: dve!ban <sebep>

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'yetkili'
};