const {bot} = require('../core/bot')

bot.on('photo', ctx => {
  ctx.replyWithHTML('Qabul qilindi!')
    .catch(e => console.error(e.message))
  let user = ctx.chat.id
  let photo = ctx.message.photo[0].file_id
  ctx.telegram.sendPhoto(user, photo)
    .catch(e => console.error(e.message))
})
