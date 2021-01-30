const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const fs = require("fs");
require("./util/eventLoader.js")(client);
const db = require("quick.db");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1NTQ0ODQwOTY0ODkyMjY5NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA3MDcyNTc5fQ.sYMLzL2QDAPMerXihfbHgrTBgdq-agVOzhe2iZAzTEo', client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);

///==========komutlar==========\\\

//sa as baş

client.on("message", async msg => {
   if(!msg.guild) return
  let saas = await db.fetch(`saas_${msg.guild.id}`);
  if (saas == 'kapalii') return;
  if (saas == 'aciki') {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send(`**Aleyküm Selam Hoşgeldin.** ${msg.author} <a:shpyepe:769233606320586773>`);
  }
    if (msg.content.toLowerCase() === 'SA') {
    msg.channel.send(`**Aleyküm Selam Hoşgeldin.** ${msg.author} <a:shpyepe:769233606320586773>`);
  }
    if (msg.content.toLowerCase() === 'selamun aleyküm') {
    msg.channel.send(`**Aleyküm Selam Hoşgeldin.** ${msg.author} <a:shpyepe:769233606320586773>`);
  }
      if (msg.content.toLowerCase() === 'SELAMUN ALEYKÜM') {
    msg.channel.send(`**Aleyküm Selam Hoşgeldin.** ${msg.author} <a:shpyepe:769233606320586773>`);
  }
      if (msg.content.toLowerCase() === 'Selamun Aleyküm') {
    msg.channel.send(`**Aleyküm Selam Hoşgeldin.** ${msg.author} <a:shpyepe:769233606320586773>`);
  }
  }
});

//sa as bitiş

////güvenlik
client.on('guildMemberAdd',async member => {
    let user = client.users.cache.get(member.id);
    let kanal = client.channels.cache.get(db.fetch(`guvenlik${member.guild.id}`))
         const Canvas = require('canvas')
         const canvas = Canvas.createCanvas(360,100);
         const ctx = canvas.getContext('2d');

    const resim1 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614151181752860672/yhosgeldirrn.png')
      const resim2 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614164419768877056/yhosgeldirrn.png')
      const kurulus = new Date().getTime() - user.createdAt.getTime();
      const gün = moment(kurulus).format('dddd');
      var kontrol;
        if (kurulus > 2629800000) kontrol = resim2
      if (kurulus < 2629800000) kontrol = resim1


       const background = await Canvas.loadImage( "https://cdn.discordapp.com/attachments/591299755976425493/614164413318168606/Adsz.png");
         ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({format: "png"}));
    ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
    ctx.beginPath();
      ctx.lineWidth = 4;
    ctx.fill()
      ctx.lineWidth = 4;
    ctx.arc(180, 46, 36, 0, 2 * Math.PI);
      ctx.clip();
    ctx.drawImage(avatar, 143,10, 73, 72  );

     if (!kanal) return
         const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'güvenlik.png');
      kanal.send(attachment)
  });
//güvenlik bitiş

//-------------------- Afk Sistemi --------------------////lrowsxrd
//-------------------- Afk Sistemi --------------------//
//-------------------- Afk Sistemi --------------------//

const ms = require("parse-ms");
const { DiscordAPIError } = require("discord.js");

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`afk`)) return;

  if (await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);

    const embed = new Discord.MessageEmbed()

      .setColor("PINK")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`Afk Modundan Başarıyla Çıkıldı.`);

    message.channel.send(embed);
  }

  var USER = message.mentions.users.first();
  if (!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);

  if (REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms(Date.now() - süre);

    const afk = new Discord.MessageEmbed()

      .setColor("PINK")//lrowsxrd
      .setDescription(
        `**BU KULLANICI AFK**\n\n**Afk Olan Kullanıcı :** \`${USER.tag}\`\n**Afk Süresi :** \`${timeObj.hours}saat\` \`${timeObj.minutes}dakika\` \`${timeObj.seconds}saniye\`\n**Sebep :** \`${REASON}\``
      );

    message.channel.send(afk);
  }
});

//-------------------- Afk Sistemi --------------------//
//-------------------- Afk Sistemi --------------------//
//-------------------- Afk Sistemi --------------------//

//-------------------- Ever Here Engel --------------------//
//-------------------- Ever Here Engel --------------------//
//-------------------- Ever Here Engel --------------------//

client.on("message", async msg => {
  let hereengelle = await db.fetch(`hereengel_${msg.guild.id}`);
  if (hereengelle == "acik") {
    const here = ["@here", "@everyone"];
    if (here.some(word => msg.content.toLowerCase().includes(word))) {
      if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.delete();
        msg.channel
          .send(`<@${msg.author.id}>`)
          .then(message => message.delete());
        var e = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`Bu Sunucuda Everyone ve Here Yasak!`);
        msg.channel.send(e);
      }
    }
  } else if (hereengelle == "kapali") {
  }//lrowsxrd
});

//-------------------- Ever Here Engel --------------------//
//-------------------- Ever Here Engel --------------------//
//-------------------- Ever Here Engel --------------------//

//-------------Bot Eklenince Bir Kanala Mesaj Gönderme Komutu ---------------\\

const emmmmbed = new Discord.MessageEmbed()
.setThumbnail()
.setColor('PINK')
.addField(`__Merhaba Dostum Beni Eklediğin İçin Teşekkürler__`, `**Selamlar, Ben Kayex İnventive#4900 [Kayex] Botun Yapımcısıyım Botumu Eklediğin İçin Ve Bana Destek Olduğun İçin Çok Teşekkürler.**`)
.addField(`__Kayex Botun Prefix'i Nedir?__`, `**Merhaba Benim Prefix'im \`+\` Dır.**`)
.addField(`__Kayex Botun Bütün Komutlarına Nerden Bakıcam?__`, `**Kayex Botun Bütün Komutlarına Bakabilmek İçin \`+yardım\` Yazman Yeterlidir.**`)
.addField(`__Kayex Botun Linklerine Nasıl Ulaşırım?__`, `**Sohbet Kanalına \`+davet\` Yazarak Botumuzun Linklerine Ulaşabilirsin.**`)
.setFooter(`Kayex - Gelişmiş Türkçe Bot - 2020`)
.setTimestamp();


client.on("guildCreate", guild => {

let defaultChannel = "";
guild.channels.cache.forEach((channel) => {
if(channel.type == "text" && defaultChannel == "") {
if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
defaultChannel = channel;
}
}
})

defaultChannel.send(emmmmbed)

});

//----------------------------------------------------------------\\

///sayaç başlangıç
client.on("guildMemberAdd", async member => {
  let sayaç = db.fetch(`sayaç_${member.guild.id}`)
  let kanal = db.fetch(`sayaçlog_${member.guild.id}`)

if (!sayaç) return;

client.channels.cache.get(kanal).send(`Sunucuya ${member} Adlı Kullanıcı Katıldı. Toplam **${member.guild.memberCount}** Kullanıcı Olduk. **${sayaç}** Kişi Olmamıza **${sayaç - member.guild.memberCount}** Kullanıcı Kaldı!`)
})
client.on("guildMemberRemove", async member => {
  let sayaç = db.fetch(`sayaç_${member.guild.id}`)
  let kanal = db.fetch(`sayaçlog_${member.guild.id}`)

if (!sayaç) return;

client.channels.cache.get(kanal).send(`Sunucumuzdan ${member} Adlı Kullanıcı Ayrıldı. Toplam **${member.guild.memberCount}** Kullanıcı Kaldık. **${sayaç}** Kişi Olmamıza **${sayaç - member.guild.memberCount}** Kullanıcı Kaldı!`)
})
client.on("message", async msg => {
   let sayaç = db.fetch(`sayaç_${msg.guild.id}`)
  let kanal = db.fetch(`sayaçlog_${msg.guild.id}`)

if (!sayaç) return;
  if (sayaç <= msg.guild.memberCount) {
    client.channels.cache.get(kanal).send(`**${sayaç}** Kullanıcı Hedefimize Başarıyla Ulaştık!`)
    db.delete(`sayaçlog_${msg.guild.id}`)
    db.delete(`sayaç_${msg.guild.id}`)
    return;
  }
})
///sayaç bitiş
client.on("guildMemberAdd", async member => {
  let kanal1 = await db.fetch(`otorolkanal_${member.guild.id}`);
  let rol1 = await db.fetch(`otorolrol_${member.guild.id}`);

  let kanal = member.guild.channels.cache.get(kanal1);
  let rol = member.guild.roles.cache.get(rol1);

  if (!kanal) return;
  if (!rol) return;

  const embed = new Discord.MessageEmbed()

    .setColor("PINK")
    .setDescription(
      `Sunucuya Katılan **${member}** Adlı Kullanıcıya Başarıyla \`${rol.name}\` Rolü Verildi.`
    );

  kanal.send(embed);
  member.roles.add(rol);
});

/////////////////////

client.on("guildCreate", async function(guild) {
const owner = client.users.cache.get(guild.ownerID)
const kanal = "781846770077401148" //Eklendim mesajının atılacağı kanal ID'sini giriniz.
const ottoman = new Discord.MessageEmbed()
.setTitle(`Yeni bir sunucuya eklendim`)
.setColor("PINK")
.addField(`Sunucu Adı`, guild.name)
.addField(`Sunucu Sahibi`, owner)
.addField(`Sunucu Üye Sayısı`, guild.memberCount)
client.channels.cache.get(kanal).send({embed: ottoman}).catch(err => console.log("Kanala mesaj atamıyorum!"))
})
//
  
//Atıldım
client.on("guildDelete", async function(guild) {
const owner = client.users.cache.get(guild.ownerID)
const kanal = "781846796712148992" //Atıldım mesajının atılacağı kanal ID'sini giriniz.
const ottoman = new Discord.MessageEmbed()
.setTitle(`Bir sunucudan atıldım`)
.setColor("PINK")
.addField(`Sunucu Adı`, guild.name)
.addField(`Sunucu Sahibi`, owner.username + "#" + owner.discriminator)
.addField(`Sunucu Üye Sayısı`, guild.memberCount)
client.channels.cache.get(kanal).send({embed: ottoman}).catch(err => console.log("Kanala mesaj atamıyorum!"))
})
