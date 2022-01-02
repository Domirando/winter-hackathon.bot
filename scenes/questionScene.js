const { messages }= require('../lib/messages')
// const { messages2 }= require('../types/messages')
const { Scenes: { BaseScene: Scene } } = require('telegraf');
const {admin} = require("../config");
const questionScene = new Scene('questionScene')
questionScene.enter(ctx => ctx.reply("Feel free to give any question related to Hackathon 😉 ... "))
questionScene.on('text', ctx => {
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
questionScene.leave(ctx => {
    ctx.reply(messages.question).then()

})

module.exports = questionScene