const {Markup} = require('telegraf')
const {bot} = require('../core/bot')
const { messages } = require('../lib/messages')
const {Composer} = require("telegraf");
const composer = new Composer()
bot.command('hackathon', ctx => {
  const message = messages.hackathon
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
    ctx.replyWithDocument({source: "assets/winter_web_hackathon.pdf", filename: "Winter Web Hackathon.pdf"}, { caption: "Bot: @winter_hackathon_bot"})
})
