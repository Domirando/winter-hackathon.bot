var path = require('path')
const { messages }= require('../lib/messages')
const { Scenes: { BaseScene: Scene } } = require('telegraf');
const {admin} = require("../config");
const zipFileScene = new Scene('zipFileScene')

function getExtension(filename) {
    var ext = path.extname(filename||'').split('.');
    return ext[ext.length - 1];
}
console.log(getExtension('file.zip'))
console.log(getExtension('file.doc'))
let file;
zipFileScene.enter(ctx => ctx.reply("Now, I am ready to get zip file of your project for Hackathon..."))
zipFileScene.on('document', ctx => {
    ctx.session.name = ctx.message.document.file_name
    file = ctx.message.document.file_name;
    ctx.telegram.sendDocument(admin, ctx.message.file,{
        parse_mode: 'HTML',
        reply_markup: {
            inline_keyboard: [
                [
                    {text: `Reply to user => \\nid: "${ ctx.from.id}; username: ${ ctx.from.username }`, callback_data: "reply_" + ctx.from.id}
                ]
            ],
        }}
    ).catch().then()
    return ctx.scene.leave()
})
zipFileScene.leave(ctx => {
    file = getExtension(file);
    if (file==="zip" ) {
        ctx.replyWithHTML(messages.zipFile).then(r => console.log(r))
        ctx.replyWithAnimation('https://tenor.com/bdyvr.gif').then()
    }else if(getExtension(file) !== "zip"){
        ctx.replyWithHTML(`Please send just zip file of your project!`).then()
    }
})

module.exports = zipFileScene