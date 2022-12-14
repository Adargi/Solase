const { Client, IntentsBitField } = require('discord.js')
const CH = require('command-handler')
const path = require('path')
require('dotenv/config')

const client = new Client({
   intents: [IntentsBitField.Flags.Guilds],
})

client.on('ready', () => {
   console.log('The bot is ready')

   new CH({
      client,
      commandsDir: path.join(__dirname, 'commands'),
   })
})

client.login(process.env.TOKEN)

