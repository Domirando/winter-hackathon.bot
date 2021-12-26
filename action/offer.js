const { bot } = require('../core/bot')
const { messages } = require('../lib/messages')

bot.command('offer', ctx => {
    let offer = false;
    if (ctx.message.text === '/offer'){
        offer = true;
        ctx.replyWithHTML("Feel free to give any offer, you thoughts and offers are highly appreciated!").then(r => console.log(r))
    }
    bot.on('text', ctx => {
        if (offer) {
            offer = false;
            ctx.replyWithHTML(messages.offer).then(r => console.log(r))
        }else{
            ctx.replyWithHTML(`Please run <code>/offer</code> command!`).then(r => console.log(r))
        }
    })
})