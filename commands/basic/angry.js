const { EmbedBuilder } = require('discord.js')
const { prefix, api } = require('../../config')
const fetch = require('node-fetch')
const rndColor = require('../../utility/rndColor')

module.exports = {
   name: 'angry',
   alias: '',
   usage: `${prefix}angry`,
   cat: 'Expresión',
   perms: [],
   desc: `Pues... El mismo nombre lo indica.`,
   run: async (sela, msg, args) => {
      fetch(`https://api.tenor.com/v1/search?q=anime%20angry&` +
         `limit=10&key=${api.tenor}`, { method: "GET" })
         .then(res => res.json())
         .then(data => {
            var img = data.results[Math.floor(Math.random() *
               data.results.length)].media[0].gif.url
            var color = msg.member.displayHexColor === '#000000' || msg.member.displayHexColor === '#FFFFFF' ?
               rndColor() : msg.member.displayHexColor
            const embed = new EmbedBuilder()
               .setAuthor({
                  name: `${msg.author.username} está enojad@.`,
                  iconURL: msg.author.displayAvatarURL({
                     format: 'png',
                     dynamic: true,
                     size: 2048
                  })
               })
               .setImage(img)
               .setColor(color)
            msg.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
         })
   }
}