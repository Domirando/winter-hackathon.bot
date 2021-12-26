const { bot } = require('../core/bot')
const { messages } = require('../lib/messages')
var path = require('path')

function getExtension(filename) {
    var ext = path.extname(filename||'').split('.');
    return ext[ext.length - 1];
}

bot.command('zipFile', ctx => {
    let zipFile = false;
    if (ctx.message.text === '/zipFile'){
        zipFile = true;
        ctx.replyWithHTML("Now I am ready to get your project!").then(r => console.log(r))
    }
    bot.on('document', ctx => {
        let file = getExtension(ctx.message.document.file_name);
        if (file==="zip" && zipFile) {
            zipFile = false;
            ctx.replyWithHTML(messages.zipFile).then(r => console.log(r))
        }else if(!zipFile){
            ctx.replyWithHTML(`Please, define what are you going to do and run a command first of all!
To see the list of commands run <code>/help</code>.`).then();
        }else if(getExtension(file) !== "zip"){
            ctx.replyWithHTML(`Please send just zip file of your project!`).then()
        }
    })
})
