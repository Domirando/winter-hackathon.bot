const { messages }= require('../lib/messages')
const { Scenes: { BaseScene: Scene } } = require('telegraf');
const linkScene = new Scene('linkScene')

function isValidUrl(_string) {
    const matchpattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
    return matchpattern.test(_string);
}
let file;
console.log(isValidUrl(file))
linkScene.enter(ctx => ctx.reply("Now I am ready to get your project's link!"))
linkScene.on('text', ctx => {
    ctx.session.name = ctx.message.text
    file = ctx.message.text;
    return ctx.scene.leave()
})
linkScene.leave(ctx => {
    if ( isValidUrl(file) ) {
        ctx.replyWithHTML(messages.link).then(r => console.log(r))
        ctx.replyWithAnimation('https://tenor.com/bdyvr.gif').then()
    }else if(!isValidUrl(file)){
        ctx.replyWithHTML(`Please send just link of your project!`).then()
    }
})

module.exports = linkScene