const db = require("quick.db");
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (!message.guild) {
    return;
  }
  if (message.author.id != ayarlar.sahip)
    return message.channel.send("**Bu Komutu Sadece Botun Sahibi Kullanabilir!**");

  let nesne = args[0];
  if (!nesne)
    return message.channel.send("**Bir kullanıcının IDsini girmelisin?**");

  db.set(`gold_${nesne}`, "gold");
  message.channel.send(`<@${nesne}> **Aramıza Hoşgeldin Artık Premium Üyesin!**`)
  client.channels.get("784374186150985739")
  client.channels.send(`<@${nesne}> Artık Premium Üye Oldu`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pre-yap"],
  permLevel: 0
};
exports.help = {
  name: "premium-yap",
  category: `Gold`,
  description: "Gold üye yaparsınız",
  usage: "goldyap <ID>"
};
