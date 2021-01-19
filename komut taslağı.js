const Discord = require('discord.js'); //bu bir modül modüllerin ne işe yaradığını öğrenmek için 'Modül Yükleme' klasörüne


exports.run = (client, message) => {


};

exports.conf = {
  enabled: true, //komutun açık kapalı olduğunu gösterir | true = açık false = kapalı
  guildOnly: false, //komutu herkes kullanabiliyormu onu gösterir
  aliases: ['1', '2'], //komutun farklı kullanımları
  permLevel: 0 //kimler kullancağını belirtir 
};

exports.help = {
  name: 'komutadı', //adını belirtin (kullanmak için gereken komut) Örneğin otorol NOT Hangi ismi yazarsanız komut o isimle çalışır
  description: 'komutaçıklaması', //komutun açıklaması
  usage: 'kullanımı' //komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
};




