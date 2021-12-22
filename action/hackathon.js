const {Markup} = require('telegraf')
const {bot} = require('../core/bot')
const {keyboard} = require("telegraf/typings/markup");

bot.command('hackathon', ctx => {
  const message = message["hackathon"]
  bot.telegram.sendMessage(ctx.chat.id, message,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [
            {text: 'Register to the Hackathon', url: 'https://forms.gle/z1qj6kadUWC1TMkQ9'}
          ],
          [
            {text: 'Join the Hackathon group!', url: 'https://t.me/ITWebHackathon'}
          ],
          [
            {text: 'Download presentation for more information', callback_data: "presentation"}
           ]
        ]
      }
    })
    .catch(e => console.error(e.message))
})

bot.action("presentation", ctx => {
    ctx.replyWithDocument({source: "assets/winter_web_hackathon.pdf", filename: "Winter Web Hackathon.pdf"}).then()
})
