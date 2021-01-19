// BU KOD BOT SUNUCUYA EKLENDİĞİNDE KURUCUYA MESAJ ATAR

client.on('guildCreate', guild => {
  const owner = guild.owner
  const mrb = guild.systemChannel
  if (!mrb) return;
  let merhaba = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .setAuthor(guild.name, guild.iconURL)
  .addField('**Doldur**', `${owner}`)
  .addField('Doldur', `**${prefix}bilgi** yazmanız yeterlidir!`)
  .addField('**Botumuzun özelliklerini öğrenmek için**', `**${prefix}yardım** yazmanız yeterlidir!`)
  .addField('Botumuzu eklemek istiyorsanız', `**${prefix}davet** yazarak ekleyebilirsiniz.`)
  mrb.send(merhaba);
});

// BU KOD BOT SUNUCUYA EKLENDİĞİNDE KANALA MESAJ ATAR

client.on('guildCreate', guild => {
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('Bir Sunucuya Katıldım;')
  .setDescription(`Bot, 》${guild.name}《 adlı sunucusuna katıldı [${guild.memberCount} Üye]!`)
  .setFooter('BOT İSMİ', client.user.avatarURL)
  .setTimestamp()
  client.channels.get('KANAL İD').send(embed);
});

// BU KOD BOT SUNUCUDAN ATILDIĞINDA KANALA MESAJ ATAR

client.on('guildDelete', guild => {
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('Bir Sunucudan Ayrıldım;')
  .setDescription(`Bot, 》${guild.name}《 sunucusundan ayrıldı [${guild.memberCount} Üye]!`)
  .setFooter('Bot İsmi', client.user.avatarURL)
  .setTimestamp()
  client.channels.get('KANAL İD').send(embed);
  
  //////BOT.JS Atılcaktır !/////////
  
  
  
  /////Adem Can | RC - Real Code///////