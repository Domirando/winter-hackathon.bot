const {bot} = require('../core/bot')

bot.on('photo', ctx => {
  ctx.replyWithHTML('Qabul qilindi!').then()
  let user = ctx.chat.id
  let photo = ctx.message.photo[0].file_id
  ctx.telegram.sendPhoto(user, photo).then()
})
