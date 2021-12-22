const {bot} = require('../core/bot')

bot.start(ctx => {
  ctx.replyWithSticker('https://tenor.com/view/anime-wave-hi-hello-hey-gif-16679443').then(r => console.log(r))
  ctx.replyWithHTML(`Hello ${ctx.from.first_name}! \nI am very glad to see you!`).then(r => console.log(r))
})
