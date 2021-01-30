const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('PINK')
.setAuthor(`${client.user.username}`,client.user.avatarURL())
.addField(`Oy Ver`, `**[Bot'a Oy Vermek İçin TIKLA](https://top.gg/bot/755448409648922696/vote)**`)
.setImage(`https://theme.zdassets.com/theme_assets/2401605/22d1b4e4aa266ef8e9c5c13cae6b2eacdd009f30.png`)
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["OYVER"],
  permLevel: 0
};

exports.help = {
  name: 'oyver',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
