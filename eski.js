var Jimp = require("jimp");
exports.run = function(client, message, args) {
  let imageurl = args[0] === undefined ? message.attachments.first() : { url: args[0] };

     if (imageurl === undefined) {
         message.channel.send("**Lütfen bir görsel belirterek tekrar deneyin**");
         return;
     }

     imageurl = imageurl.url;

     Jimp.read(imageurl).then(function (image) {
image.sepia()
             .getBuffer(Jimp.MIME_PNG, (error, buffer) => {
             message.channel.send("", {
                 files: [{
                     attachment: buffer,
                     name: "old.png"
                 }]
             });
         });
     });
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'eski',
    description: 'resmi eskitir.',
    usage: '<image> eski'
  };
