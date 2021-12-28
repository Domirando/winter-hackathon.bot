const messages = {
    "welcome": `My name is <a href="https://github.com/Domirando/winter-hackathon.bot">Webassinno!</a> I am an assistant of <a href="github.com/Domirando/">Domirando (Maftuna Vohidjonovna)</a>.`,
    "greeting_gif": `https://tenor.com/view/anime-wave-hi-hello-hey-gif-16679443`,
    "assistant_gif": `https://tenor.com/bmPxt.gif`,
    "start": function (ctx) {
        return `Hello ${ctx.from.first_name}! \nI am very glad to see you! \nPlease run /help command to see the list of commands!`
    },
    "help": `🌬<b>Commands which you can use:</b> \n\n` +
        `/start - <code>start bot</code> \n` +
        `/welcome - <code>to get information about me (Webassinno)</code> \n` +
        `/help - <code>to get a list of commands</code> \n` +
        `/hackathon - <code>more about our Winter Web Hackathon</code> \n` +
        `/question - <code>gets questions related to Hackathon</code> \n` +
        `/offer - <code>gets offers related to Hackathon</code> \n` +
        `/link - <code>gets the link of your project for Hackathon</code> \n` +
        `/zipFile - <code>gets zip file of your project for Hackathon</code> \n\n` +
        `Author <a href="https://github.com/Domirando">Domirando</a> \n\n<i>Happy Hacking ☃️!!!</i>`,
    "hackathon": '☃️<b>Winter Web Hackathon</b> - is organizing by ' +
        '<a href="https://github.com/Domirando">Domirando</a> ' +
        'and supported by GD TEAM and IT School. In our Hackathon you have to ...  ' +
        '\nPlease register if you haven’t\'t done yet, if done please join our ' +
        'Telegram group and feel free to give any question about Winter Web Hackathon. \n\n<i>Happy Hacking!!!</i>',
    "question": `Sent!\nYour question will be responded maximum in 8 hours. I suggest you to look through presentation about hackathon, if you are so in hurry, maybe you can find answer from there.`,
    "offer": `Appreciated! Thanks for interest and offer. Will be included as far as need and useful.`,
    "link": `Accepted! Your work will be checked and fairly assessed by Hackathon Experts. \n\n<i>See you on award ceremony in 21.01.2022 😉</i>`,
    "zipFile": `Accepted! Your work will be checked and fairly assessed by Hackathon Experts. \n\n<i>See you on award ceremony in 21.01.2022 😉</i>`
}
module.exports = {
    messages
}