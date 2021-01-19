const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":negative_squared_cross_mark: Bunu Yapmak İçin Gerekli Yetkiye Sahip Değilsin!");
  if(!args[0] || args[0 == "yardım"]) return message.reply("Kullanımı: `f!prefix Yeni Ön-Ek`");

  let prefixes = JSON.parse(fs.readFileSync("./sunucuyaözelayarlar/prefix.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./sunucuyaözelayarlar/prefix.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  
  message.channel.send(`Ön-Ek başarıyla \`${args[0]}\` olarak ayarlandı!`)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'prefix-ayarla',
  description: 'Prefix ayarlar / flaiscode - 2018.',
  usage: 'prefix-ayarla'
};

//bot.js

let cooldown = new Set();
let cdseconds = 0;

client.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./sunucuyaözelayarlar/prefix.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: ayarlar.prefix
    };
  }
 let prefix = prefixes[message.guild.id].prefixes;
  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("Komutlar arasında 5 saniye beklemelisin.")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(cliemt,message,args);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)

if (message.content === `<@${bot.user.id}>`) {
  message.channel.send(`Beni kullanmak için ${prefix}yardım dan komutlara bakabilirisin <@${message.author.id}>!`)
}
});