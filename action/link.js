const { bot } = require('../core/bot')
const { messages } = require('../lib/messages')
//
// function isValidURL(string) {
//     var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
//     return (res !== null)
// }
// const isValidURL = string => {
//     try { return Boolean(new URL(string)); }
//     catch(e){ return false; }
// }
function isValidUrl(_string) {
    const matchpattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
    return matchpattern.test(_string);
}
bot.command('link', ctx => {
    let link = false;
    if (ctx.message.text === '/link'){
        link = true;
        ctx.replyWithHTML("Now I am ready to get your project's link!").then(r => console.log(r))
    }
    bot.on('text', ctx => {
        let _string1 = ctx.message.text;
        if (isValidUrl(_string1) && link) {
            link = false;
            ctx.replyWithHTML(messages.link).then(r => console.log(r))
        }else if(!link){
            ctx.replyWithHTML(`Please, define what are you going to do and run a command first of all!\nTo see the list of commands run <code>/help</code>.`).then()
        }else{
            ctx.replyWithHTML(`Please send just a link of your project!`).then();
        }
    })
})
