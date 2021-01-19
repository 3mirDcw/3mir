const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (client,message,args) => {
  var rol = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find("name", `${rol}`)
  var hata = new Discord.RichEmbed()
  .setColor("#36393F")
  .setDescription("❌ Lütfen Bir Rol İsmi Yazın `Örnek: d!rolinfo Üye`");
  if(!role) return message.channel.send(hata);
  var moment = require("moment");
  var temps = moment(message.createdTimestamp).format("LLLL");
  var roleinfoEmbed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField(':pencil2: Rol İsmi', role.name, true)
  .addField(':id: ID', role.id, true)
  .addField(':busts_in_silhouette: Role Sahip Kullanıcılar', role.members.size, true)
  .addField(':blue_heart: Renk', role.hexColor, true)
  .addField(':mega: Etiketleme?', role.mentionable ? '\nEvet' : 'Hayır', true)
  .addField(':date: Oluşturulduğu Zaman', moment(role.createdAt).format("LL"), true)
  .setFooter("");
  message.channel.send(roleinfoEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rolinfo', 'rolhakkında', 'rolbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'rolinfo',
  description: 'rolinfo | Rol hakkında bilgi verir.',
  usage: 'rolinfo <rolismi>'
};