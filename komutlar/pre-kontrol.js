const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let kullanıcı = await db.fetch(`gold_${message.author.id}`)
  let kullanıcıYazi;
  if (kullanıcı == undefined) kullanıcıYazi = `<a:kayex_cevrimdisi:758699607898980392> **Premium Üye Değilsin!** <a:kayex_cevrimdisi:758699607898980392>`
  if (kullanıcı == 'gold') kullanıcıYazi = `<a:kayex_cevrimici:758699610176356363> **Premium Üyesin!** <a:kayex_cevrimici:758699610176356363>`
 // if (nemesis == 'deaktif') nemesisYazi = 'Bu sunucuda Premium mod aktif değil.'
  const embed = new Discord.MessageEmbed()
  .setTitle('<a:B_Dikkat:762264602234585098> Premium Kontrol <a:B_Dikkat:762264602234585098>')
  .setColor("PINK")
  .setDescription(kullanıcıYazi)
  message.channel.send(embed)
  }

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["pre-kontrol"],
    permLevel: 0,
}

exports.help = {
    name: 'premium-kontrol',
    category: `Gold`,
    description: 'Premium Kontrol Eder.',
    usage: 'premium-kontorol'
}
