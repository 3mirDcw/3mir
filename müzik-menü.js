const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("MÜZİK KOMUTLARI:",`
dve!çal:         ^Yazdığınız şarkıyı çalar.^
dve!kuyruk:      ^Şarkı kuyruğunu gösterir.^
dve!devam:       ^Duraklatılan şarkıya devam eder.^
dve!geç:         ^Çalan şarkıyı geçer.^
dve!dur:         ^Çalınan şarkıyı duraklatır.^
dve!çalan:       ^Mesajı yazdığınız anda hangi şarkının çaldığını gösterir.^
dve!duraklat:    ^Oynatılan şarkıyı duraklatır.^
dve!ses:         ^Oynatılan şarkının ses seviyesini ayarlar.^
dve!gir:         ^Bulunduğun kanala giriş yapar.^
dve!ayrıl:       ^Bulunduğun kanaldan çıkış yapar.^


* örn: dve!çal <şarkıismi>

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'müzik'
};