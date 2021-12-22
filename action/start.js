const {bot} = require('../core/bot')

bot.start(ctx => {
  ctx.replyWithSticker('https://tenor.com/view/anime-wave-hi-hello-hey-gif-16679443')
    .catch(e => console.error(e.message))
  ctx.replyWithHTML(`Hello ${ctx.from.first_name}! \nI am very glad to see you!`)
    .catch(e => console.error(e.message))
})
