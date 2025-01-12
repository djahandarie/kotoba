const { FulfillmentError } = require('monochrome-bot');
const pauseManager = require('../common/quiz/pause_manager.js');
const constants = require('../common/constants.js');

/**
* Evaluate arbitrary javascript code and return the result. Syntax: }eval [javascript code]
*/
module.exports = {
  commandAliases: ['restoresave'],
  botAdminOnly: true,
  hidden: true,
  uniqueId: 'restoresave',
  async action(bot, msg, suffix) {
    if (!suffix) {
      throw new FulfillmentError({
        publicMessage: 'You need to provide a user ID and index to restore.',
        logDescription: 'No suffix',
      });
    }

    const [userId, saveIndex] = suffix.split(' ');
    const mementos = await pauseManager.getRestorable(userId);

    if (userId && saveIndex === undefined) {
      if (!mementos) {
        return msg.channel.createMessage('No restorable saves were found for that user.');
      }

      return msg.channel.createMessage(mementos.map((memento, index) => {
        const date = new Date(memento.time);
        const dateString = `${date.getDate() + 1}/${date.getMonth() + 1}/${date.getFullYear()}`;
        return `${index}: ${memento.quizType} ${dateString}`;
      }).join('\n'));
    }

    const indexString = await pauseManager.restore(userId, mementos[parseInt(saveIndex, 10)]);

    return msg.channel.createMessage({
      embed: {
        title: `One save was restored. User can load it by saying k!quiz load ${indexString + 1}.`,
        color: constants.EMBED_NEUTRAL_COLOR,
      },
    });
  },
};
