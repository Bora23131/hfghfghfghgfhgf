const { Client, MessageAttachment } = require('discord.js');
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {
  
      var animegif = [
        "https://i.pinimg.com/originals/a5/55/72/a5557236af5a2c8e00cd1bc4045a8af1.jpg",
        "https://i.pinimg.com/originals/6e/9e/94/6e9e94d5017e84b724cc3b15590e63f7.png",
        "https://i.pinimg.com/originals/0f/94/5a/0f945adee953feba9cc48a52dbd7e18e.jpg",
        "https://i.pinimg.com/originals/b1/0c/dc/b10cdcad1de93589c81762a32e80e64f.jpg",
        "https://i.pinimg.com/originals/c0/32/23/c0322320d2bca3913743890eaa5150e5.jpg",
        "https://i.pinimg.com/originals/57/df/03/57df0319650f9e30972ace96aaa10416.jpg",
        "https://i.pinimg.com/564x/7b/ed/53/7bed53b75969e75f81a803fd2a9deeaa.jpg",
        "https://i.pinimg.com/236x/d0/91/a6/d091a6c1de14a917b691ffd5c7c2cbb6.jpg",
        "https://i.pinimg.com/736x/fe/13/b3/fe13b3cc72dc31aac5cfccf596336834.jpg",
        "https://i.pinimg.com/originals/b6/d4/67/b6d4670f56a660b4a957cccdc7721b16.jpg",
        "https://i.pinimg.com/originals/dc/f6/87/dcf687a58610e5c23eee026e9c37ba03.jpg",
        "https://i.pinimg.com/736x/f6/d4/5a/f6d45adca119fa3043b23837b289ee81.jpg",  
        "https://i.pinimg.com/originals/57/2a/80/572a80f52d7a85e8f873fe8659fde8a4.jpg",
        "https://i.pinimg.com/736x/03/7d/ca/037dca4b9ceafd48647af5b7ed7cc949.jpg",
        "https://i.pinimg.com/originals/68/2d/32/682d322194dc4a468ed6ead840689376.jpg",
        "https://i.pinimg.com/564x/92/22/7e/92227eb997aa34e60f703de2398702d8.jpg",
        "https://i.pinimg.com/736x/2b/80/00/2b80003a434cb6d986d282e51215e391.jpg",
        "https://i.pinimg.com/564x/b6/4e/a4/b64ea4e59843280df65addce3832d5c4.jpg",
        "https://i.pinimg.com/originals/38/5b/1b/385b1bce4bfb5dee9050db84dca1ecf6.jpg",
        "https://i.pinimg.com/originals/40/e7/cb/40e7cbd72366a73dadced8fe8e02dd31.jpg",
        "https://i.pinimg.com/736x/2d/14/f2/2d14f2c836995d73aa1693b61acff7d9.jpg",
        "https://i.pinimg.com/originals/4a/13/e9/4a13e91dce96bbef2288b970499b4523.jpg",
        "https://i.pinimg.com/originals/3e/1e/9b/3e1e9b641a436b0968b508987adb5408.jpg",
        "https://i.pinimg.com/originals/b0/e6/03/b0e603dd420e8dcb222d0eb69e1ce130.jpg",
        "https://i.pinimg.com/originals/04/12/f8/0412f8b77d07b6ea15a539f2a56f1720.jpg",
        "https://i.pinimg.com/564x/8a/49/f7/8a49f7a7cb10b6a911197360400042fe.jpg",
        "https://i.pinimg.com/564x/c1/b7/d5/c1b7d5e291b708c4502a6917e645ccf1.jpg",
        "https://pbs.twimg.com/media/Dp4JDI3X0AAoZ8d.jpg",
        "https://i.pinimg.com/originals/93/62/e2/9362e23dce5fc278d699ec8097fcede5.jpg",
        "https://img.wattpad.com/70096d0031886a69d89d5fc89c64869867e21cc8/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5f5a364f574952313376572d59673d3d2d3736323539313931302e313562343536343531393534616564643937363033363836383635382e6a7067?s=fit&w=720&h=720",
      ];
  
  var animegif1 = animegif[Math.floor(Math.random(1) * animegif.length)];
  
  message.channel.send(animegif1)
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [""],
    permLevel: 0
};

exports.help = {
    name: "foto",
    description: '',
    usage: ''
};
