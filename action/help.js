const { Composer } = require('telegraf')
const { messages } = require('../lib/messages')

const {bot} = require('../core/bot')

const composer = new Composer()

composer.help(ctx => {
  let text = messages.help
  ctx.replyWithHTML(text)
      .catch(e => console.error(e.message))
})

bot.use(composer.middleware())