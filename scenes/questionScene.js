const { messages }= require('../lib/messages')
const { Scenes: { BaseScene: Scene } } = require('telegraf');
const zipFileScene = new Scene('zipFileScene')
zipFileScene.enter(ctx => ctx.reply("Feel free to give any zipFile related to Hackathon 😉 ... "))
zipFileScene.on('text', ctx => {
    ctx.session.name = ctx.message.document.file_id
    return ctx.scene.leave()
})
zipFileScene.leave(ctx => {
    ctx.reply(messages.zipFile).then()
})

module.exports = zipFileScene