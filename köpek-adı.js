const Discord = require('discord.js');
const client = new  Discord.Client()
var dogNames = require('dog-names');

exports.run = (client, message) => {
    name: dogNames.Random()
    message.channel.send(embed)

};

exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['p'],
        permLevel: 0
};

exports.help = {
    name: 'kopekadı',
    descrtiption: 'kopek adı',
    usage: 'kopekadı'
};