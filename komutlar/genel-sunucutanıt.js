const Discord = require('discord.js')

const ms = require("ms")
const db = require('quick.db')
exports.run = async (client, message, args) => {  

    if(message.author.id !== message.guild.owner.user.id) return message.channel.send(`:x: Bu kullanmak için kurucu olmalısın.`)

  let cooldown = 84e+7, // 24 Saat
        amount = Math.floor(Math.random() * 1000) + 4000;      

    let lastDaily = await db.fetch(`gunluk_${message.guild.id}`);
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));


        const Ottoman = new Discord.MessageEmbed()
    .setDescription('Her 24 Saate Bir Bu Komutu Kullanabilirsin!')
            .setColor('PINK')
        message.channel.send(Ottoman)
 
    } else {
        const EGG = new Discord.MessageEmbed()
        .setDescription('[Sunucunuz Burda Tanıtıldı](https://discord.gg/wjJCbZbygR) \n Her 24 Saate Bir +sunucutanıt Komutunu Kullanıp Sunucunu Tanıtabilirsin!')
        .setColor('PINK')
 message.channel.send(EGG);
    message.channel.createInvite({maxAge: 0}).then((invite) => {
        const Ottoman1 = new Discord.MessageEmbed()
        .setDescription('Sende Beni Ekleyerek Sunucunu Tanıtabilirsin!')
            .addField(`Sunucu Sahibi`, message.author.tag, true)
            .addField(` Sunucun İsmi`, message.guild.name, true)
      .addField(`Davet Linki`, `[TIKLA](${invite.url})`, true)
            .setColor('PINK')
        .setFooter('Kayex Sunucu Tanıtma Sistemi')
      .setThumbnail('https://cdn.discordapp.com/avatars/755448409648922696/8b563051616c31a2a2c30893a009f195.png?size=1024')
       client.channels.cache.get('781531652533780510').send(Ottoman1)
    db.set(`gunluk_${message.guild.id}`, Date.now());
        })}
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sunucu-tanıt'],
    permLevel: 0
}

exports.help = {
    name: 'sunucutanıt',
    description: 'Sunucunuzu Tanıtır.',
    usage: 'sunucutanıt'
}