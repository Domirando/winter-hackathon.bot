const { Composer } = require('telegraf')
const { bot } = require('../core/bot')
const { admin }  = require('../config')
const composer = new Composer()

composer.on('text', ctx => {
    ctx.telegram.sendMessage(admin, `${ctx.message.text} from "${ctx.from.id }"`).catch().then()
})

bot.use(composer.middleware())