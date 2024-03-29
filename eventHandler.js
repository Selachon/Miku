const event = (e) => require(`./events/${e}`)
module.exports = (sela) => {
   sela.on('ready', () => event('ready') (sela))
   sela.on('messageCreate', msg => event('messageCreate') (sela, msg))
   sela.on('guildMemberAdd', member => event('guildMemberAdd') (sela, member))
   sela.on('guildMemberRemove', member => event('guildMemberRemove') (sela, member))
   sela.on('interactionCreate', interaction => event('interactionCreate') (sela, interaction))
}