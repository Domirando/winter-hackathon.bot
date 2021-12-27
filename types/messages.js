const { Composer } = require('telegraf')
const { bot } = require('../core/bot')
const { admin }  = require('../config')
const composer = new Composer()

composer.on('text', ctx => {
    ctx.telegram.sendMessage(admin, ctx.message.text).catch().then()
})

bot.use(composer.middleware())