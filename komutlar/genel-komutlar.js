const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Komut Sayisi`)
    .setDescription('**\n Kayex Bot - Toplam**  **`' + client.commands.size + '`** **Komut Vardir!**')
    .setColor("PINK")

    return message.channel.send(embed);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["KOMUTLAR"],
  permLevel: 0
};

exports.help = {
  name: 'komutlar',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};

