const { Composer, Markup } = require('telegraf')
const { bot } = require('../core/bot')
const { admin }  = require('../config')
const composer = new Composer()

composer.on('message', ctx => {
    ctx.telegram.sendMessage(admin, ctx.message.text).then()
})
composer.on('document', ctx => {
    ctx.telegram.sendDocument(admin, ctx.document).then()
})

bot.use(composer.middleware())