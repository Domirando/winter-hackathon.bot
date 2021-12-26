const { Composer } = require('telegraf')
const { messages } = require('../lib/messages')

const {bot} = require('../core/bot')

const composer = new Composer()

composer.start(ctx => {
  ctx.replyWithSticker(messages.greeting_gif)
      .catch(e => console.error(e.message))
  ctx.replyWithHTML(messages.start(ctx))
      .catch(e => console.error(e.message))
})

bot.use(composer.middleware())