const { Client, IntentsBitField } = require('discord.js')
require('dotenv/config')

client.on('ready', () => {
   console.log('The bot is ready')
})

client.login(process.env.TOKEN);

