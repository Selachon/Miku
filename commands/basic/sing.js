const { MessageEmbed } = require('discord.js');
const { prefix, api } = require('../../config');
const fetch = require('node-fetch');

module.exports = {
   name: 'sing',
   alias: '',
   usage: `${prefix}sing`,
   cat: 'Acción',
   perms: [],
   desc: `Pues... El mismo nombre lo indica.`,
   run: async (sela, msg, args) => {
      fetch(`https://api.tenor.com/v1/search?q=anime%20sing&`+
      `limit=10&key=${api.tenor}`, { method: "GET" })
      .then(res => res.json())
      .then(data => {
         var img = data.results[Math.floor(Math.random() *
            data.results.length)].media[0].gif.url;
         var color = msg.member.displayHexColor === '#000000' ?
         '#F4F867' : [msg.member.displayHexColor, '#F4F867'][
            Math.floor(Math.random() * 2)
         ];
         const embed = new MessageEmbed()
         .setAuthor(`${msg.author.username} está cantando.`,
            msg.author.displayAvatarURL)
         .setImage(img)
         .setColor(color);
         msg.channel.send(embed);
      });
   }
}