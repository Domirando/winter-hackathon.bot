const { bot } = require('../core/bot')
const { Scenes: { Stage } } = require ('telegraf');
const { session } = require('telegraf')
const { zipFileScene } = require('../scenes')
const stage = new Stage([zipFileScene])
bot.use(session())
bot.use(stage.middleware())

bot.command('zipFile', ctx => ctx.scene.enter('zipFileScene'))
