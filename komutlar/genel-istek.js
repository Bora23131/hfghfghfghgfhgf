const discord = require("discord.js");

exports.run = async(client, message, args) => {
let istek = args.slice(0).join(' ')
if (!istek) return message.channel.send(`İsteğinizi Belirtiniz!`)

message.channel.send(`:white_check_mark: **İsteğin İletildi!**`)

var embed = new discord.MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL())
.setTitle(`${message.author.username} - İstek`)
.setColor('PINK')
.setDescription(`:white_check_mark: Kullanıcının İsteği: **${istek}**`)
.setThumbnail(message.author.avatarURL())
client.channels.cache.get('779792353820803082').send(embed)
    message.delete({timeout: 100})
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'istek'
}