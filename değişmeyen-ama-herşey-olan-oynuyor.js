client.on('ready', () => {
    console.log(`${client.user.tag} giriş yaptı!`); // konsola bot açılınca ne yazacağımızı yazıyoruz
    bot.user.setActivity('!yardım', { type: 'STREAMING'}); // !yardım olan kısmını kendinize göre editleyebilirsiniz
    // type kısmında STREAMING = yayında WATCHING = izliyor PLAYING = Oynuyor LISTENING = dinliyor DND = Rahatsız etmeyin demek
    
  });