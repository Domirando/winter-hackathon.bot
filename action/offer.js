const { bot } = require('../core/bot')
const { messages } = require('../lib/messages')
let offer = false;
bot.command('offer', ctx => {
        ctx.replyWithHTML("Feel free to give any offer, you thoughts and offers are highly appreciated!").then(r => console.log(r))
    bot.on('text', ctx => {
        if(offer) {
            ctx.replyWithHTML(messages.offer).then(r => console.log(r))
        }else{
            ctx.replyWithHTML(`Please, define what are you going to do and run a command first of all!\nTo see the list of commands run <code>/help</code>.`).then()
        }
    })
})