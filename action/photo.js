const {bot} = require('../core/bot')
const {messages} = require("../lib/messages");

bot.on('photo', ctx => {
  ctx.replyWithHTML(messages["photo"])
    .catch(e => console.error(e.message))
  let user = ctx.chat.id
  let photo = ctx.message.photo[0].file_id
  ctx.telegram.sendPhoto(user, photo)
    .catch(e => console.error(e.message))
})
