const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const kayex = new Discord.MessageEmbed()
    .setColor("PINK")
    .setAuthor(`Kayex Bot`, client.user.avatarURL)
    .addField(
      `> Neden Biz ?`,
      `**Çünkü İşimizi Mükemmel Bir Halde Yapıyoruz!**`
    )
    .addField(
      `> Botumuzu Davet Etmek İsterseniz`,
      `:link: [Botu Davet Et!](https://top.gg/bot/755448409648922696/invite)`
    )
    .addField(
      `> Destek Sunucusuna Katılmak İsterseniz`,
      `:link: [Destek Sunusu](https://discord.gg/qexvvHtWPg)`
    )

    .setThumbnail(
      "https://cdn.discordapp.com/avatars/755448409648922696/8b563051616c31a2a2c30893a009f195.webp?size=4096"
    );
  message.channel.send(kayex);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "",
  usage: ""
};
