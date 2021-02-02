const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.execute = async (message) => {
    let client = message.client;
    if (message.author.bot) return;
    if (!message.guild) return;

    if (message.content.startsWith(ayarlar.Prefix)) {
        let args = message.content.substring(ayarlar.Prefix.length).trim().split(" ")
        let command = args[0]

        args = args.splice(1);

        if (client.commands.has(command)) {
            client.commands.get(command).execute(client, message, args);
      
        } else if(client.aliases.has(command)) {
            client.aliases.get(command).execute(client, message, args);
      
        } else return;
    };
};

exports.conf = {
    event: "message"
};
