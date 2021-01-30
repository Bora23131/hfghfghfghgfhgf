const Discord = require("discord.js");
const request = require("request");

exports.run = async (client, message, args) => {
  if (message.channel.type !== "text") return;
  const limit = args[0] ? args[0] : 0;
  if (!limit) {
    var motion = new Discord.MessageEmbed()
      .setDescription(`Doğru kullanım: \`!yavaş-mod [0/120]\``)
      .setColor("PINK")
      .setTimestamp();
    message.channel.send({ motion });
    return;
  }
  if (limit > 120) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Süre limiti maksimum **120** saniye olabilir."
        )
        .setColor("PINK")
    );
  }
  message.channel.send(
    new Discord.MessageEmbed()
      .setDescription(
        `Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`
      )
      .setColor("PINK")
  );
  var request = require("request");
  request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
      rate_limit_per_user: limit
    },
    headers: {
      Authorization: `Bot ${client.token}`
    }
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", "yavasmod", "yavaşmod"],
  permLevel: 3
};

exports.help = {
  name: "yavaş-mod",
  description: "Sohbete yazma sınır (süre) ekler.",
  usage: "yavaş-mod [1/120]"
};