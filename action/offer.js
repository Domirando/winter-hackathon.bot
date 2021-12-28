const { bot } = require('../core/bot')
const { Scenes: { Stage } } = require ('telegraf');
const { session } = require('telegraf')
const { offerScene } = require('../scenes')
const stage = new Stage([offerScene])
bot.use(session())
bot.use(stage.middleware())
bot.command('offer', ctx => ctx.scene.enter('offerScene'))

