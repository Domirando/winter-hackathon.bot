const { bot } = require('../core/bot')
const { Scenes: { Stage } } = require ('telegraf');
const { session } = require('telegraf')
const { questionScene } = require('../scenes')
const stage = new Stage([questionScene])
bot.use(session())
bot.use(stage.middleware())
bot.command('question', ctx => ctx.scene.enter('questionScene'))

