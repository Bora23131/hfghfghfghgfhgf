const Discord = require('discord.js')
const chalk = require('chalk')
const moment = require('moment');
require('moment-duration-format');

exports.run = async (client, message, args) => {
 try {
  const duration = moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]');
    //  try {
let shardinfo = {
        ping: await client.shard.fetchClientValues('ws.ping'),
        server_count: await client.shard.fetchClientValues('guilds.cache.size'),
        user_count: await client.shard.fetchClientValues('users.cache.size'),
        uptime: await client.shard.fetchClientValues("uptime")
    }
let i = client.shard.ids
    let shardembed = new Discord.MessageEmbed()
    .setAuthor(`Kayex Shard Sistemi`, client.user.avatarURL())
    .setColor('PINK')

    for(i=0;i<client.shard.count;i++) {
        shardembed      .addField(`Kayex`, [`

              **<a:kayex_yildiz1:758699663624503418> Shard ${i+1}**
              Ping: ${Math.round(shardinfo.ping[i])}ms
               Sunucu: ${shardinfo.server_count[i]}
              `], true)
    }
    message.channel.send(shardembed)
       }   catch (err) {
    const ayarlar = require("../ayarlar.json");
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `Sanırım bir sorun var! Bunu yetkililere bildir!\nDestek Sunucusu: [Tıkla!](https://discord.gg/wjJCbZbygR) \nHata kodu ${err}`
      )
      .setColor("PINK")
    message.channel.send(embed);
                         }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["SHARD"],
  permLevel: 0
};

exports.help = {
  name: "shard",
  description: "",
  usage: ""
};
