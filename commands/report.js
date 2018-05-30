const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
   if(!rUser) return message.channel.send("Couldn't find User.");
   let reason = args.join(" ").slice(22);

   let reportEmbed = new Discord.RichEmbed()
   .setDescription("Reports")
   .setColor("#ff0000")
   .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
   .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
   .addField("Channel", message.channel)
   .addField("Time", message.createdAt)
   .addField("Reason", reason);

   let reportsChannel = message.guild.channels.find(`name`, "reports");
   if(!reportsChannel) return message.channel.send("Couldn't find reports channel");

   message.delete().catch(O_o=>{});
   reportsChannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
