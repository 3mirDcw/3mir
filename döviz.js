
client.on('message', async message => {
    if (message.content.toLowerCase() === prefix + 'döviz') {
  var request = require('request');
  request('https://www.doviz.com/api/v1/currencies/USD/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) { 
        var info = JSON.parse(body);
  request('https://www.doviz.com/api/v1/currencies/EUR/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error); 
    else if (!error) { 
        var euro = JSON.parse(body);
  
        let doviz = new Discord.RichEmbed()
    .setColor("#36393F")
        .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
        .addField("💎 Döviz", `**💵 Dolar: **${info.buying} TL\n**💶 Euro: **${euro.buying} TL`)
       
        message.channel.send(doviz);
  }
  })
    }
  })
    }
  });