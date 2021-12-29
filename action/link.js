const { bot } = require('../core/bot')
const { Scenes: { Stage } } = require ('telegraf');
const { session } = require('telegraf')
const { linkScene } = require('../scenes')
const stage = new Stage([linkScene])
bot.use(session())
bot.use(stage.middleware())
bot.command('link', ctx => ctx.scene.enter('linkScene'))
