const {Markup} = require('telegraf')
const {bot} = require('../core/bot')

bot.command('hackathon', ctx => {
  const message = '<b>Winter Web Hackathon</b> - is organizing by ' +
    '<a href="https://github.com/Domirando">Domirando</a> ' +
    'and supported by GD TEAM and IT School. In our Hackathon you have to ...  ' +
    '\nPlease register if you haven\'t done yet, if done please join our ' +
    'Telegram group and feel free to give a question about Winter Web Hackathon!!!'
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
          ]
        ]
      }
    })
    .catch(e => console.error(e.message))
})
