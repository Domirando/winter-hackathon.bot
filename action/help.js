const {bot} = require('../core/bot')
const {messages} = require("../lib/messages");

bot.help(ctx => {
  let text = messages["help"]
  ctx.replyWithHTML(text)
    .catch(e => console.error(e.message))
})
