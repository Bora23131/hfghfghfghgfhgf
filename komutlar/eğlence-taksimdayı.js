const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
 const embed = new Discord.MessageEmbed()
 .setColor('#313131')
 .setDescription("``Buyur Taksim Dayı :)``")
 .setImage('https://cdn.discordapp.com/attachments/757801669839814677/758308330585325619/taksim.gif')
 message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["dayı","taksim"],
  permLevel: 0,
   
};

exports.help = {
  name: 'taksimdayı',
 
};