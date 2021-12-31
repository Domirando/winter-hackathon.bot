const { messages }= require('../lib/messages')
const { messages2 }= require('../types/messages')
const { Scenes: { BaseScene: Scene } } = require('telegraf');
const {admin} = require("../config");
const questionScene = new Scene('questionScene')
questionScene.enter(ctx => ctx.reply("Feel free to give any question related to Hackathon 😉 ... "))
questionScene.on('text', ctx => {
    ctx.session.name = ctx.message.text
    messages2()
    if (ctx.from.id !== 1135417452){
        ctx.telegram.sendMessage(admin, `<code>"${ctx.message.text}"</code> from user => \nid: "${ user_id}; username: ${ username }"`,{
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {text: 'Reply', callback_data: "reply_" + user_id}
                    ]
                ]
            }}
        ).catch().then()
    }
    return ctx.scene.leave()
})
questionScene.leave(ctx => {
    ctx.reply(messages.question).then()
})

module.exports = questionScene