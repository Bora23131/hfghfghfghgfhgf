const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
  let hyprex = message.mentions.users.first() || message.author
  let avatar = `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.gif?size=2048`
  let sorgu = `${hyprex.avatarURL()}`
 let eggaming = new Discord.MessageEmbed()
 .setAuthor(message.author.tag, hyprex.avatarURL())
 .setDescription(`[[**Avatar Link**](${avatar})]`)
 .setColor('PINK')
 .setImage(hyprex.displayAvatarURL({size:4096,dynamic:true}))
  .setFooter(`Kullanan: ${message.author.tag}`)
  
  message.channel.send(eggaming)
  
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "avatar",
  description: "",
  usage: ""
};