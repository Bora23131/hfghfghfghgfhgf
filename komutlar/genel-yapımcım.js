const discord = require('discord.js')


exports.run = async(client, message, args) => {

const yapımcım = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setTitle(`${client.user.username} - Yapımcım`)
.setColor('PINK')
.addField(`Kurucum;`, `<@734046689505312829>`, true)
.addField(`Tasarımcım;`, `<@480385837087850496>`)
.setThumbnail(client.user.avatarURL())
message.channel.send(yapımcım)

}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'yapımcım'
}
