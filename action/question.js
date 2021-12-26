const { bot } = require('../core/bot')
const { messages } = require('../lib/messages')
let question = false;

bot.command('question', ctx => {
        question = true;
        ctx.replyWithHTML("Feel free to give any question related to Hackathon!").then(r => console.log(r))
    bot.on('text', ctx => {
        if (question) {
            question = false;
            ctx.replyWithHTML(messages.question).then(r => console.log(r))
        }else{
            ctx.replyWithHTML(`Please, define what are you going to do and run a command first of all!\nTo see the list of commands run <code>/help</code>.`).then()
        }
    })
})