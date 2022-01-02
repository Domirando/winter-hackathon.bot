const { messages }= require('../lib/messages')
const { Scenes: { BaseScene: Scene } } = require('telegraf');
const {admin} = require("../config");
const offerScene = new Scene('offerScene')
offerScene.enter(ctx => ctx.reply("Any offer, idea will be highly appreciated! So feel free to give 😉"))
offerScene.on('text', ctx => {
    ctx.session.name = ctx.message.text
    ctx.telegram.sendMessage(admin, `<code>"${ctx.message.text}"</code> from user => \nid: "${ ctx.from.id}; username: ${ ctx.from.username }"`,{
        parse_mode: 'HTML',
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'Reply', callback_data: "reply_" + ctx.from.id}
                ]
            ]
        }}
    ).catch().then()
    return ctx.scene.leave()
})
offerScene.leave(ctx => {
    ctx.reply(messages.offer).then()
    ctx.replyWithAnimation('https://tenor.com/bdyvr.gif').then()
})

module.exports = offerScene