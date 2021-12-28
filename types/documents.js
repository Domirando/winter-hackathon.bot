const { Composer, session} = require('telegraf')
const { bot } = require('../core/bot')
const { admin }  = require('../config')
const composer = new Composer()
composer.use(session());
let  user_id;
composer.on('document', ctx => {
    if (ctx.session?.resultId) {
        ctx.telegram.sendMessage(ctx.session.resultId, `Hi there 👋! \n<i>${ctx.message.text}</i>`, {
            parse_mode: 'HTML'
        }).then();
        ctx.session.resultId = null;
        return
    }
    user_id = ctx.from.id;
    let user_name = ctx.from.username;
    ctx.telegram.sendDocument(admin, ctx.message.document.file_id, { caption: `id: <i>${ user_id }</i>; username: <i>${ user_name }</i>`,
        parse_mode: 'HTML',
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'Reply', callback_data: "result_" + user_id}
                ]
            ]
        }}).catch().then()
})
composer.action(/result_(.+)/, ctx => {
    if (!ctx.session) { ctx.session = {} };
    ctx.session.resultId = ctx.match[1];
    ctx.reply("Send me result");
})

bot.use(composer.middleware())