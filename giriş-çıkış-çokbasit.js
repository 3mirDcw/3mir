client.on("guildMemberAdd", async member => {
const kanal = member.guild.channels.find("name", "Kanal İsmi")
kanal.sendMessage(member + '  ' + member.guild.name + ' adlı sunucuya hoşgeldin! Seni görmek ne güzel.')
})


////////////Bot.js  Atılacaktır.////////////

/////////Adem Can | RC - Real Code/////////////