const Discord = require('discord.js');
exports.run = function (client, message, args) {
    var request = require('request');

    request('https://www.doviz.com/api/v1/currencies/USD/latest', function (error, response, body) {
        if (error) return message.channel.send('Bir hata oluştu, daha sonra tekrar deneyin.');
        else if (!error) {
            var info = JSON.parse(body);
            if (info) {
                const embed = new Discord.RichEmbed()
                    .setTitle('💵 Dolar ')
                    .addField('Dolar Aliş', info.selling)
                    .addField('Dolar Satiş', info.buying)
                    .setColor(0xff7f00)
                    .setThumbnail('https://cdn.discordapp.com/attachments/485516457166503957/490279987786809345/dolar.png')
                message.channel.send({ embed });
            }
        }
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'dolar',
    description: 'dolar',
    usage: 'dolar'
};