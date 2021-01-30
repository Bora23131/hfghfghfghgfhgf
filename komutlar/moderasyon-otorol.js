const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()

if(!rol) {
  
const embed2 = new Discord.MessageEmbed()

.setDescription('Örnek Kullanım : **+otorol @rol #kanal**')
.setColor('PINK')

return message.channel.send(embed2)
};

if(!kanal) {

const embed3 = new Discord.MessageEmbed()

.setDescription('Örnek Kullanım : **+otorol @rol #kanal**')
.setColor('PINK')

return message.channel.send(embed3)
};

db.set(`otorolrol_${message.guild.id}`, rol.id)
db.set(`otorolkanal_${message.guild.id}` ,kanal.id)
 
const embed = new Discord.MessageEmbed()

.setColor('PINK')
.setDescription(`Otorol Rolü **@${rol.name}** Olarak, Bildirimin Gideceği Kanal İse **#${kanal.name}** Olarak Ayarlandı.`)

message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oto-rol'],
  permLevel: 0
};

exports.help = {
  name: 'otorol',
  description: 'Alpha Network',
  usage: 'otorol'
};