const { Composer } = require('telegraf')
const { bot } = require('../core/bot')
const { admin }  = require('../config')
const composer = new Composer()

composer.on('document', ctx => {
    ctx.telegram.sendDocument(admin, ctx.message.document.file_id).then(r => console.log(r))
})

bot.use(composer.middleware())