const { bot } = require('../core/bot')
const { messages } = require('../lib/messages')

bot.command('question', ctx => {
    let question = false;
    if (ctx.message.text === '/question'){
        question = true;
        ctx.replyWithHTML("Feel free to give any question related to Hackathon!").then(r => console.log(r))
    }
    bot.on('text', ctx => {
        if (question) {
            question = false;
            ctx.replyWithHTML(messages.question).then(r => console.log(r))
        }else{
            ctx.replyWithHTML(`Please run <code>/question</code> command!`).then(r => console.log(r))
        }
    })
})