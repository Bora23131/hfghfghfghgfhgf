const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {



    var mka = ["https://cdn.discordapp.com/attachments/750120598889431095/756946444308709386/ATATURK.gif","https://cdn.discordapp.com/attachments/750120598889431095/756946362339164280/7b397c232e47a6281e219f0d2672fa8b.gif","https://cdn.discordapp.com/attachments/750120598889431095/756947089937924106/32890824be8818834aa9122d2611d140.gif","https://media.discordapp.net/attachments/704396564227031130/705431688615821321/tumblr_mi62qrmpue1s04h99o5_250.gif"];
    var mka = mka[Math.floor(Math.random(1) * mka.length)];
    message.channel.send(mka);

};



exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['atatürk','m','mustafakemalatatürk','kemal'],

  permLevel: 0

};



exports.help = {

  name: 'mka',

  description: 'Rastgele gif atar.',

  usage: 'mka'

};