const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('PINK')
.setDescription("``Yardım Menüsü``","Mevcut Prefix'im ``+``'dır Aşşağıdaki Bütün Komutlar'ın Başına Koyarsanız Çalışır.")
.addField(`**__Genel__**`, '``giriş-sıram``,``deprem-bilgi``,``komutlar``,``film-öner``,``site``,``oyver``,``afk``,``avatar``,``davet``,``google``,``istatistik``,``istek``,``korona``,``profil``,``say``,``sunucubilgi``,``sunucuresmi``,``sunucu-tanıt``,``yapımcım``,``üyedurum``,``şikayet``')
.addField(`**__Eğlence__**`, '``aduketçek``,``ara112``,``ara155``,``espri``,``fbi``,``kaçcm``,``taksimdayı``,``yazı-tura``,``zarat``')
.addField(`**__Moderasyon__**`, '``bansorgu``,``ban``,``everhere-engel``,``güvenlik``,``ping``,``sa-as``,``sayaç``,``sil``,``unban``,``yavaşmod``')
.addField(`**__Çekiliş__**`, '``çekiliş-başlat``,``yenikişiseç``,``çekiliş-durdur``,``çekiliş-bitir``')
.addField(`**__Logo__**`, '``discord-logo``,``gold-logo``,``grafiti-logo``,``kalp-logo``,``müzik-logo``,``arrow-logo``,``bubble-logo``,``bubble2-logo``,``comic-logo``,``cool-logo``')
.addField(`**__Gif__**`, '``anime``,``man``,``mka``,``woman``,``rgif``')
.addField(`**__Fotoğraf__**`, '``foto``')
.addField(`**__Premium__**`, '``premium-kontrol``,``oylama``')
.addField(`**LİNKLER**`, '**[[YouTube Link](https://www.youtube.com/channel/UCrZyZridLfnHXPLImAKpItQ)]\n[[Destek Link](https://discord.gg/qexvvHtWPg)]\n[[Beni Davet Et](https://top.gg/bot/755448409648922696/invite)]**')
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["YARDIM"],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
