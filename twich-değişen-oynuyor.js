var oyun = [
  "Yazı 1",
  "Yazı 2",
  "Yazı 3"
];

setInterval(function() {

  var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

  client.user.setGame(oyun[random], "https://www.twitch.tv/ninja");
  }, 2 * 2500);
  //Seinroth twich-değişen-oynuyor :)