const {bot} = require('../core/bot')

bot.help(ctx => {
  let text = `<b>Commands which you can use on me:</b> \n` +
    `/start - <code>start bot</code> \n` +
    `/help - <code>to get a list of commands</code> \n` +
    `/hackathon - <code>more a about our Winter Web Hackathon</code> \n` +
    `Author <a href="https://github.com/Domirando">Domirando</a> \n` +
    `<pre>const require</pre> \n`
  ctx.replyWithHTML(text).then()
})
