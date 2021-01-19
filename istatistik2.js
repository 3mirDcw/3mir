const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  message.channel.sendCode("asciidoc", `= ${client.user.username} İstatistikler =
• Bellek kullanımı :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Çalışma süresi   :: ${duration}
• Kullanıcılar     :: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
• Sunucular        :: ${client.guilds.size.toLocaleString()}
• Kanallar         :: ${client.channels.size.toLocaleString()}
• Discord.JS sürüm :: v${Discord.version}
• Ping             :: ${client.ping}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: 'Botun istatistik gösterir.',
  usage: 'boti'
};