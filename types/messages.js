const { Composer } = require('telegraf')
const { bot } = require('../core/bot')
const { admin }  = require('../config')
const composer = new Composer()

composer.on('text', ctx => {
    ctx.telegram.sendMessage(admin, ctx.message.text).then().catch()
})

bot.use(composer.middleware())