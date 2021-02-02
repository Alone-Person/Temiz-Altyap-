const Discord = require("discord.js");
const client = global.client;

exports.execute = async () => {
    client.user.setPresence({ activity: { name: "Alone Person Temiz Altyapı"}, status: "online" });
};

exports.conf = {
  event: "ready"
};