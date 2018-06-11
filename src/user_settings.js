const { SettingsConverters, SettingsValidators } = require('monochrome-bot');

module.exports = [
  {
    userFacingName: 'Quiz',
    children:
    [
      {
        userFacingName: 'Answer time limit',
        description: 'This setting controls how many seconds players have to answer a quiz question before I say time\'s up and move on to the next question.',
        allowedValuesDescription: 'A number between 5 and 120 (in seconds)',
        uniqueId: 'quiz/japanese/answer_time_limit',
        defaultUserFacingValue: '16',
        convertUserFacingValueToInternalValue: SettingsConverters.stringToFloat,
        convertInternalValueToUserFacingValue: SettingsConverters.toString,
        validateInternalValue: SettingsValidators.createRangeValidator(5, 120),
      },
      {
        userFacingName: 'Score limit',
        description: 'This setting controls how many points the quiz game stops at. When a player scores this many points, the game stops and they win.',
        allowedValuesDescription: 'A whole number between 1 and 10000',
        uniqueId: 'quiz/japanese/score_limit',
        defaultUserFacingValue: '10',
        convertUserFacingValueToInternalValue: SettingsConverters.stringToInt,
        convertInternalValueToUserFacingValue: SettingsConverters.toString,
        validateInternalValue: SettingsValidators.createRangeValidator(1, 10000),
      },
      {
        userFacingName: 'Unanswered question limit',
        description: 'This setting controls how many questions in a row are allowed to go unanswered before the game stops. The intended purpose for this is to automatically end games that players abandon.',
        allowedValuesDescription: 'A whole number between 1 and 25',
        uniqueId: 'quiz/japanese/unanswered_question_limit',
        userSetting: false,
        defaultUserFacingValue: '5',
        convertUserFacingValueToInternalValue: SettingsConverters.stringToInt,
        convertInternalValueToUserFacingValue: SettingsConverters.toString,
        validateInternalValue: SettingsValidators.createRangeValidator(1, 25),
      },
      {
        userFacingName: 'Delay after unanswered question',
        description: 'This setting controls how long I will wait (in seconds) after a timed out question before showing a new one. By setting this higher, players get more time to view and consider the correct answer.',
        allowedValuesDescription: 'A number between 0 and 120',
        uniqueId: 'quiz/japanese/new_question_delay_after_unanswered',
        defaultUserFacingValue: '3.75',
        convertUserFacingValueToInternalValue: SettingsConverters.stringToFloat,
        convertInternalValueToUserFacingValue: SettingsConverters.toString,
        validateInternalValue: SettingsValidators.createRangeValidator(0, 120),
      },
      {
        userFacingName: 'Delay after answered question',
        description: 'This setting controls how long I will wait (in seconds) after an answer is correctly answered and the window for additional answers closes, before I show a new question. For example, if **Additional answer wait window** is set to two, and this setting is set to three, then after a question is answered correctly a total of five seconds will pass before I ask a new one.',
        allowedValuesDescription: 'A number between 0 and 120',
        uniqueId: 'quiz/japanese/new_question_delay_after_answered',
        defaultUserFacingValue: '2.5',
        convertUserFacingValueToInternalValue: SettingsConverters.stringToFloat,
        convertInternalValueToUserFacingValue: SettingsConverters.toString,
        validateInternalValue: SettingsValidators.createRangeValidator(0, 120),
      },
      {
        userFacingName: 'Additional answer wait window',
        description: 'After a question is correctly answered, other players have a chance to also answer the question and get a point. This setting controls how long they have (in seconds).',
        allowedValuesDescription: 'A number between 0 and 120',
        uniqueId: 'quiz/japanese/additional_answer_wait_time',
        defaultUserFacingValue: '2.15',
        convertUserFacingValueToInternalValue: SettingsConverters.stringToFloat,
        convertInternalValueToUserFacingValue: SettingsConverters.toString,
        validateInternalValue: SettingsValidators.createRangeValidator(0, 120),
      },
      {
        userFacingName: 'Conquest and Inferno modes enabled',
        description: 'This setting controls whether Conquest and Inferno mode quizzes can be run. Say k!quiz-conquest and k!quiz-inferno to find out more about what those are. Since only the person who started a Conquest or Inferno mode quiz or a server admin can stop it, it has potential to be disruptive if not controlled, so it is disabled by default.',
        allowedValuesDescription: 'Either **enabled** or **disabled**',
        uniqueId: 'quiz/japanese/conquest_and_inferno_enabled',
        userSetting: false,
        defaultUserFacingValue: 'Disabled',
        convertUserFacingValueToInternalValue: SettingsConverters.createStringToBooleanConverter('enabled', 'disabled'),
        convertInternalValueToUserFacingValue: SettingsConverters.createBooleanToStringConverter('Enabled', 'Disabled'),
        validateInternalValue: SettingsValidators.isBoolean,
      },
      {
        userFacingName: 'Internet decks enabled',
        description: 'This setting controls whether decks imported from the internet may be used in this channel. If enabled, it is possible that someone will load a deck containing disagreeable content in this channel.',
        allowedValuesDescription: 'Either **enabled** or **disabled**',
        uniqueId: 'quiz/japanese/internet_decks_enabled',
        userSetting: false,
        defaultUserFacingValue: 'Disabled',
        convertUserFacingValueToInternalValue: SettingsConverters.createStringToBooleanConverter('enabled', 'disabled'),
        convertInternalValueToUserFacingValue: SettingsConverters.createBooleanToStringConverter('Enabled', 'Disabled'),
        validateInternalValue: SettingsValidators.isBoolean,
      }
    ]
  },
  {
    userFacingName: 'Dictionary',
    children:
    [
      {
        userFacingName: 'Display mode',
        description: 'This setting controls the default display mode for dictionary results. **big** shows up to four results with up to three definitions each. **small** only shows one result with up to three definitions.',
        allowedValuesDescription: 'Either **Big** or **Small**',
        uniqueId: 'dictionary/display_mode',
        serverOnly: false,
        defaultUserFacingValue: 'Big',
        convertUserFacingValueToInternalValue: SettingsConverters.toStringLowercase,
        convertInternalValueToUserFacingValue: SettingsConverters.toString,
        validateInternalValue: SettingsValidators.createDiscreteOptionValidator(['big', 'small']),
      }
    ]
  },
  {
    userFacingName: 'Shiritori',
    children:
    [
      {
        userFacingName: 'Bot turn minimum wait',
        description: 'This setting controls the minimum amount of time (in seconds) that the bot will wait before giving its answer.',
        allowedValuesDescription: 'A number between 1 and 30',
        uniqueId: 'shiritori/bot_turn_minimum_wait',
        serverOnly: false,
        defaultUserFacingValue: '6',
        convertUserFacingValueToInternalValue: SettingsConverters.stringToFloat,
        convertInternalValueToUserFacingValue: SettingsConverters.toString,
        validateInternalValue: SettingsValidators.createRangeValidator(1, 30),
      },
      {
        userFacingName: 'Bot turn maximum wait',
        description: 'This setting controls the maximum amount of time (in seconds) that the bot will wait before giving its answer.',
        allowedValuesDescription: 'A number between 1 and 30',
        uniqueId: 'shiritori/bot_turn_maximum_wait',
        serverOnly: false,
        defaultUserFacingValue: '9',
        convertUserFacingValueToInternalValue: SettingsConverters.stringToFloat,
        convertInternalValueToUserFacingValue: SettingsConverters.toString,
        validateInternalValue: SettingsValidators.createRangeValidator(1, 30),
      },
      {
        userFacingName: 'Answer time limit',
        description: 'This setting controls the amount of time (in seconds) that players have to give their answer. This does not apply to the bot player.',
        allowedValuesDescription: 'A number between 5 and 300',
        uniqueId: 'shiritori/answer_time_limit',
        serverOnly: false,
        defaultUserFacingValue: '40',
        convertUserFacingValueToInternalValue: SettingsConverters.stringToFloat,
        convertInternalValueToUserFacingValue: SettingsConverters.toString,
        validateInternalValue: SettingsValidators.createRangeValidator(5, 300),
      }
    ]
  }
];