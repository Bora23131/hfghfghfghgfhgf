const { Client, MessageAttachment } = require('discord.js');
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {
  
      var animegif = [
        "https://media.tenor.com/images/74a2b4b0fc38bc87c81f68b0bb24572d/tenor.gif",
        "https://media.tenor.com/images/4e4aca6054a37384ac0beb7f3937cb01/tenor.gif",
        "https://media.tenor.com/images/68048762da94c1158f05f3326f6c9297/tenor.gif",
        "https://media.tenor.com/images/7c5bebd1fe132ecd719760c124814ca9/tenor.gif",
        "https://media.tenor.com/images/767cea721903a2729ba338d16619b6e3/tenor.gif",
        "https://media.tenor.com/images/4a6c9b79d854d960c830b82fcfde3ed6/tenor.gif",
        "https://media.tenor.com/images/55c6a313698b8e348c903b764e82f6db/tenor.gif",
        "https://media.tenor.com/images/e86dd97acc86f0808d424e6fb139e707/tenor.gif",
        "https://media.tenor.com/images/f5f0030efd7697a3d838f36b3dfa826f/tenor.gif",
        "https://media.tenor.com/images/c8454d4fd79d879e59c16be2d563b173/tenor.gif",
        "https://media.tenor.com/images/5529b6a5e76bcab850a1da0b9a50b1ae/tenor.gif",
        "https://media.tenor.com/images/d1c398bfc180d625595ab735dd67192e/tenor.gif",  
        "https://media.tenor.com/images/d139e96072bae377be522258f7128881/tenor.gif",
        "https://media.tenor.com/images/aea5f4661f18ee280315a7034c63c41a/tenor.gif",
        "https://media.tenor.com/images/6665c57af123e46c25195d4bcea1c13b/tenor.gif",
        "https://media.tenor.com/images/d829a130a9242b8a9c49f0774016246d/tenor.gif",
        "https://media.tenor.com/images/7482494dabaf1c9d262526baeb8f7482/tenor.gif",
        "https://media.tenor.com/images/b4f1883dce51fb2970a83d69bf1737c7/tenor.gif",
        "https://media.tenor.com/images/b4f1883dce51fb2970a83d69bf1737c7/tenor.gif",
        "https://media.tenor.com/images/f40a237c80adaf600ac6deb814f10380/tenor.gif",
        "https://media.tenor.com/images/3ee16a4c85fcdd213b3e3bfb575e29e7/tenor.gif",
        "https://media.tenor.com/images/8b8b1dc8ba7e413e8422bfedbc576d42/tenor.gif",
        "https://media.tenor.com/images/793a00cc033a13e214398f083c5286f4/tenor.gif",
        "https://media.tenor.com/images/76cb74de246a75d5f403ae3461223dd7/tenor.gif",
        "https://media.tenor.com/images/070395e5e39689ef1455d3fda5f9c769/tenor.gif",
        "https://media.tenor.com/images/070395e5e39689ef1455d3fda5f9c769/tenor.gif",
        "https://media.tenor.com/images/9cd496a0373e1d1d1f30cf7ac4b0fe15/tenor.gif",
        "https://media.tenor.com/images/e98cd5360371fdb8db35fec84b3bfca8/tenor.gif",
        "https://media.tenor.com/images/1875b4c6842ccd891189ffed3c70df4e/tenor.gif",
        "https://media.tenor.com/images/cb6f2472196b92a71e6fdba7dc79a3b6/tenor.gif",
        "https://media.tenor.com/images/c6677ada71c3277209a5eda88f5360cd/tenor.gif",
        "https://media.tenor.com/images/a2ad831629238e1550010aac692c74a4/tenor.gif",
        "https://media.tenor.com/images/f19130e5f6d7b59a7c588323e280f7e5/tenor.gif",
        "https://media.tenor.com/images/b1162d6c50666397d93372d579b5fa67/tenor.gif",
        "https://media.tenor.com/images/fdb3feec0e46f50ff17ea3910011781a/tenor.gif",
        "https://media.tenor.com/images/1302a83269f763b3bac48fb74fa002f2/tenor.gif",
        "https://media.tenor.com/images/7738770f8104fee2663ca24767bf3465/tenor.gif",
        "https://media.tenor.com/images/1265c060c8d23f7208c288dc8e11580d/tenor.gif",
        "https://media.tenor.com/images/0d4260a30ddf2647a9e1824b8e68defd/tenor.gif",
        "https://media.tenor.com/images/a05d17c25d54bc61d95d4a95c901e9c9/tenor.gif",
        "https://media.tenor.com/images/7bfb805c1a520c33d49f8ba28d300177/tenor.gif",
        "https://media.tenor.com/images/70791534faf0158baaba9e06e9e6d61d/tenor.gif",
        "https://media.tenor.com/images/107d84c458e20b6d549184a0b6aa2c1b/tenor.gif",
        "https://media.tenor.com/images/dd777838018ab9e97c45ba34596bb8de/tenor.gif",
        "https://media.tenor.com/images/dd777838018ab9e97c45ba34596bb8de/tenor.gif",
        "https://media.tenor.com/images/6ead5b07a8228f54c12f0b503ba173cb/tenor.gif",
        "https://media.tenor.com/images/a8b95e8fa7dc40f19851e5a03a44c8d6/tenor.gif",
        "https://media.tenor.com/images/c61ce89f1e0b587fa15ca4388df4cc6f/tenor.gif",
        "https://media.tenor.com/images/e749f2c5431bac4881410e6a6cb84b4e/tenor.gif",
        "https://media.tenor.com/images/84b22407681db06fac2bbb92f029b425/tenor.gif",
        "https://media.tenor.com/images/08332b4b3338c2dc3456ea1020c369e5/tenor.gif",
        "https://media.tenor.com/images/3605189ef050b3a0240948af4e8d3c54/tenor.gif",
        "https://media.tenor.com/images/2cff0587f2cd88288a8e5c0aa2315a7c/tenor.gif",
        "https://media.tenor.com/images/c445adc00b336cc213bf9aea06627607/tenor.gif",
        "https://media.tenor.com/images/719d9d1df2ab4e3a5081259e980c73a3/tenor.gif",
        "https://media.tenor.com/images/4fdf8afc50e6b2045be28b3b58c2d221/tenor.gif",
        "https://media.tenor.com/images/5864d765bbcea86447c10435d318726f/tenor.gif",
        "https://media.tenor.com/images/0808db24376207a57a67a18c1809d99f/tenor.gif",
        "",
        "",
];
  
  var animegif1 = animegif[Math.floor(Math.random(1) * animegif.length)];
  
  message.channel.send(animegif1);
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [""],
    permLevel: 0
};

exports.help = {
    name: "rgif",
    description: '',
    usage: ''
};
