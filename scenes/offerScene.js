const { messages }= require('../lib/messages')
const { Scenes: { BaseScene: Scene } } = require('telegraf');
const offerScene = new Scene('offerScene')
offerScene.enter(ctx => ctx.reply("Any offer, idea will be highly appreciated! So feel free to give 😉"))
offerScene.on('text', ctx => {
    ctx.session.name = ctx.message.text
    return ctx.scene.leave()
})
offerScene.leave(ctx => ctx.reply(messages.offer))

module.exports = offerScene