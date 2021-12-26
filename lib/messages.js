const messages = {
    "welcome": `I am an assistant of Domirando. My name is Oraluna!`,
    "greeting_gif": `https://tenor.com/view/anime-wave-hi-hello-hey-gif-16679443`,
    "start": function (ctx) {
        return `Hello ${ctx.from.first_name}! \nI am very glad to see you!`
    },
    "help": `<b>Commands which you can use on me:</b> \n\n` +
        `/start - <code>start bot</code> \n` +
        `/help - <code>to get a list of commands</code> \n` +
        `/hackathon - <code>more about our Winter Web Hackathon</code> \n\n` +
        `Author <a href="https://github.com/Domirando">Domirando</a> \n`,
    "hackathon": '<b>Winter Web Hackathon</b> - is organizing by ' +
        '<a href="https://github.com/Domirando">Domirando</a> ' +
        'and supported by GD TEAM and IT School. In our Hackathon you have to ...  ' +
        '\nPlease register if you haven’t\'t done yet, if done please join our ' +
        'Telegram group and feel free to give any question about Winter Web Hackathon. \n\n<i>Happy Hacking!!!</i>',
    "photo": 'Accepted!'
}
module.exports = {
    messages
}