const { MessageEmbed } = require('discord.js')
const Discord = require("discord.js");
const moment = require('moment')
require('moment-duration-format')
const os = require('os')
exports.run = (client, message) => {
const dizi = []
    client.guilds.cache.forEach((item, i) => {
      dizi.push(item.memberCount)
    });
    var toplam = 0
    for (var i = 0; i < dizi.length; i++) {
      if (isNaN(dizi[i])) {
        continue;
      }

      toplam += Number(dizi[i]);
    }
    const uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
    const embed = new MessageEmbed()
    .setColor('PINK')
    .addField("__Ping__",":chart_with_upwards_trend: Mesaj Gecikmesi: {ping1} ms \n:chart_with_upwards_trend: Bot Gecikmesi: {ping2} ms"
    .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
    .replace("{ping2}", client.ws.ping))
    .addField('__Kullanıcı Sayısı__', ':busts_in_silhouette: '+toplam)
    .addField('__Sunucu Sayısı__', ':desktop: '+client.guilds.cache.size)
    .addField('__Kanal Sayısı__', ':pencil2: '+client.channels.cache.size)
    .addField('__Aktiflik__', ':up: '+uptime)
    .addField('__Node.js Versiyon__', ':mechanical_arm: '+process.version)
    .addField('__Ram Kullanımı__', ':bar_chart: '+(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)+' Mb')
    .addField('__Discord JS__', `:mechanical_arm: ${Discord.version}`)
    .addField('__Konum__', ':flag_tr: **Turkey, Türkiye, TR**')
	.addField('__Bot Sahibi__', `:gem: Kayex İnventive#0001`)
	.addField('__İşletim Sistemi__', `\`\`Windows 10 | 64 Bit\`\``)
	.addField('__CPU__', `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
    message.channel.send(embed)
};

module.exports.conf = {
  aliases: ["i", "İ", "istatistik", "İSTATİSTİK", "İS"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "is",
  description: "",
  usage: "i"
};