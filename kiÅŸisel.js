const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("KULLANICI KOMUTLARI:",`
dve!afk:         ^Afk moduna geçersiniz.^
dve!bilgi:       ^Bot hakkında bilgiler alırsınız.^
dve!davet:       ^Botun davet linkini gönderir.^
dve!destek:      ^Botun destek sunucusunu yollar.^
dve!geldim:      ^Afk modundan çıkmanızı sağlar.^
dve!istatistik:  ^Botun istatistiklerini atar.^
dve!kullanıcı:   ^Yazan kullanıcının hakkında bilgiler verir.^
dve!ping:        ^Botun pingini gösterir.^
dve!sunucu:      ^Sunucu hakkında bilgiler verir.^
dve!hatabildir:  ^Botta bulunan bir hatayı göndermenizi sağlar.^
dve!yardım:      ^Yardım komutlarını gösterir.^

* örn: dve!afk <sebep>

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kişisel',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'kişisel'
};