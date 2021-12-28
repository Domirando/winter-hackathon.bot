const { Composer, session } = require('telegraf')
const { bot } = require('../core/bot')
const { admin }  = require('../config')
const composer = new Composer()
composer.use(session());
let  user_id;
composer.on('text', ctx => {
    if (ctx.session?.replyId) {
        ctx.telegram.sendMessage(ctx.session.replyId, `Hi there 👋! \nYou gave a question so here is an answer: \n<i>${ctx.message.text}</i>`, {
            parse_mode: 'HTML'
        }).then();
        ctx.session.replyId = null;
        return
    }
    user_id = ctx.from.id
    let username = ctx.from.username
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
    }})
composer.action(/reply_(.+)/, ctx => {
    if (!ctx.session) { ctx.session = {} };
    ctx.session.replyId = ctx.match[1];
    ctx.reply("Send me your answer");
})
bot.use(composer.middleware())

