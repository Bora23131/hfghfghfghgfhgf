const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu Komudu Kullanabilmen İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın ! `);

if (args[0] === 'sıfırla') {
  let sayaç = db.fetch(`sayaç_${message.guild.id}`)
if (!sayaç) return message.channel.send(`Sayaç Ayarlanmadığı İçin Sıfırlanamaz!`)
message.channel.send(`Sayaç Başarıyla Sıfırlandı!`)
  db.delete(`sayaçlog_${message.guild.id}`)
  db.delete(`sayaç_${message.guild.id}`)
  return;
}

let sayaç = args[0]
if (!sayaç) return message.channel.send(`Bir Sayı Belirtin ama **${message.guild.memberCount}**'tan Az Olmasın!`)
if (sayaç < message.guild.memberCount) return message.channel.send(`Lütfen Sayıyı **${message.guild.memberCount}**'tan Az Olmasın!`)

let kanal = message.mentions.channels.first()
if (!kanal) return message.channel.send(`Sayaç Kanalını Ayarlamayı Unutma!`)

db.set(`sayaç_${message.guild.id}`, sayaç)
db.set(`sayaçlog_${message.guild.id}`, kanal.id)

message.channel.send(`Sayaç Başarıyla Ayarlandı ! `)

}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'sayaç'
}
