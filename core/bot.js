const {Telegraf} = require('telegraf')

const bot = new Telegraf(process.env.TOKEN)

bot.launch()
  .then(() => console.log('Bot successfully launched'))
  .catch(e => console.error('Bot failed to launch', e.message))

module.exports = {
  bot
}
