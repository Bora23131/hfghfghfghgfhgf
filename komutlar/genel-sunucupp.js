const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

  const TA = new Discord.MessageEmbed()
  .setColor("PINK")
  .setTitle(`${message.guild.name}`)
  .setImage(message.guild.iconURL())
  message.channel.send(TA)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
    aliases: ["sunucuresmi"],
}


exports.help = {
  name: 'sunucuresmi',
  description: 'Sunucuresmi.',
  usage: 'prefix+sunucuresmi',
};
