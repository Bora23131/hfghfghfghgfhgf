const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);

if(isNaN(args[0])) {
  var errembed = new Discord.MessageEmbed()
    .setColor("PINK")
    .addField(`Yanlış Kullanım!`, `Bir rakam yazmalısın!`)
    .addField(`Doğru Kullanım:`, `${ayarlar.prefix}sil <temizlenecek mesaj sayısı>`)
return message.channel.send(errembed);
}

if (args[0] < 1) return message.reply("**1** adetten az mesaj silemem!")
if (args[0] > 100) return message.reply("**100** adetten fazla mesaj silemem!")

message.channel.bulkDelete(args[0]).then(deletedMessages => {
if (deletedMessages.size < 1) return message.reply("Hiç mesaj silemedim! **14** günden önceki mesajları silemem!**");
})
message.channel.send(`<a:koyumavitik:762264852818427914> Başarıyla **${args[0]}** Tane Mesajı Uzaya Fırlattım!`)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sil", "mesaj-sil", "mesajları-sil", "temizle"],
  permLevel: `Mesajları yönet yetkisine sahip olmak gerekir.`
};

exports.help = {
  name: 'sil',
  category: 'moderasyon',
  description: 'Belirtilen miktarda mesaj siler.',
  usage: 'sil <miktar>'
};
