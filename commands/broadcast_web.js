'use strict'
const webQuiz = require('./../webserver/quiz.js');

/**
* Send a message as the bot.
* Syntax: }broadcast [channel_id] [announcement]
*/
module.exports = {
  commandAliases: ['}bw'],
  botAdminOnly: true,
  shortDescription: 'Send a message as me.',
  usageExample: '}broadcast [channelId] Hello!',
  action(bot, msg, suffix) {
    webQuiz.broadcast(suffix);
  },
};