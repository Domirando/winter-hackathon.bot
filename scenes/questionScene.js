const { messages }= require('../lib/messages')
const { Scenes: { BaseScene: Scene } } = require('telegraf');
const questionScene = new Scene('questionScene')
questionScene.enter(ctx => ctx.reply("Feel free to give any question related to Hackathon 😉 ... "))
questionScene.on('text', ctx => {
    ctx.session.name = ctx.message.text
    return ctx.scene.leave()
})
questionScene.leave(ctx => {
    ctx.reply(messages.question).then()
})

module.exports = questionScene