const { Composer } = require('telegraf')
const { messages } = require('../lib/messages')

const {bot} = require('../core/bot')

const composer = new Composer()

composer.welcome(ctx => {
  ctx.replyWithSticker(messages.assistant_gif)
      .catch(e => console.error(e.message))
  ctx.replyWithHTML(messages.welcome)
      .catch(e => console.error(e.message))
})

bot.use(composer.middleware())