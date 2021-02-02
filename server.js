const { Client, Collection } = require("discord.js");
const client = global.client = new Client({ fetchAllMembers: true });
const ayarlar = require("./ayarlar.json");
const fs = require("fs");

client.commands = new Collection();
client.aliases = new Collection();

fs.readdirSync("./commands").filter(file => file.endsWith(".js")).forEach(file => {
    let command = require(`./commands/${file}`);
    client.commands.set(command.conf.command, command);
    console.log(`[Komut] ${file.replace(".js", "")} Komut Yüklendi.`);
    command.conf.aliases.forEach(aliases => {
        client.aliases.set(aliases, command)  
    });
});

fs.readdirSync("./events").filter(file => file.endsWith(".js")).forEach(file => {
    let event = require(`./events/${file}`);
    client.on(event.conf.event, event.execute);
    console.log(`[Event] ${file.replace(".js", "")} Event Yüklendi.`);
});

client.login(ayarlar.Token).then(c => console.log(`Bot Aktif! ${client.user.tag} Olarak Giriş Yaptım.`)).catch(err => console.error(`Tokende Bir Sorun var! Tokenin Doğru Olduğundan Emin Ol!`));
