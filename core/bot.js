const {Telegraf, session} = require('telegraf')
const { Scenes: { Stage } } = require('telegraf');

const bot = new Telegraf(process.env.TOKEN)
const admin = new Telegraf(process.env.ADMIN)

bot.launch()
  .then(() => console.log('Bot successfully launched'))
  .catch(e => console.error('Bot failed to launch', e.message))

module.exports = {
  admin,
  bot
}
