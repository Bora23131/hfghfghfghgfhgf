const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('PINK')
.setAuthor(`${client.user.username}`,client.user.avatarURL())
.addField(`Site`, `**[Sitemize Gitmek İçin TIKLA](http://bot.kayexbots.ml/)**`)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["SİTE"],
  permLevel: 0
};

exports.help = {
  name: 'site',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
