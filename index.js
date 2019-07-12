/**
 *
 * A Trivia Bot for Slack!
 *
 * Local Testing in terminal:
 * xoxb-your-token npm start
 *
 */

/**
 * Data for Now:
 */
const dataAll = {
    dataCategory: 'dataAll',
    questions: [
        {
            question: 'Name as many countries as you can in 30 seconds.',
            answers: [
                'united states', // todo: decide a way to group answers that have multiple spelling
                'USA',
                'United States of America',
                'canada',
                'mexico',
                'ghana',
                'spain',
                'brasil', // todo: decide a way to group answers that have multiple spelling
                'brazil',
                'thailand',
                'england',
                'france',
                'ireland',
            ]
        },
        {
            question: 'Name as many of the wealthiest people on the Forbes 100 list in 30 seconds.',
            answers: [
                'Jeff Bezos',
                'Bill Gates',
                'Warren Buffet',
                'Bernard Arnault',
                'Carlos Slim Helu',
                'Amancio Ortega',
                'Larry Ellison',
                'Mark Zuckerberg',
                'Michael Bloomberg',
                'Larry Page',
            ]
        },
        {
            question: 'Name as many states in the USA as you can in 30 seconds.',
            answers: [
                'Alaska',
                'Arkansas',
                'Arizona',
                'Alabama',
                'California',
                'Colorado',
                'Connecticut',
                'Deleware',
                'Ohio',
            ]
        },
        {
            question: 'Name as many elements on the periodic table as you can.',
            answers: [
                'Gold',
                'Germanium',
                'Gallium',
            ]
        }
    ]
};

const dataGeneral = {
    dataCategory: 'dataGeneral',
    questions: [
        {
            question: 'Data General Question',
            answers: [
                'Cupertino',
                'Calgary',
                'Sao Paulo',
            ]
        }
    ]
};

const dataSports = {
    dataCategory: 'dataSports',
    questions: [
        {
            question: 'Name as many MLS teams as you can in 30 Seconds.',
            answers: [
                'Crew',
                'Earthquakes',
                'Fire',
                'Red Bulls'
            ]
        }
    ]
};

const dataMovies = {
    dataCategory: 'dataMovies',
    questions: [
        {
            question: 'Top 100 Movies on IMDB.. Go!',
            answers: [
                'Shawshank Redemption',
                'Django',
                'City of God',
            ]
        }
    ]
};

const dataCm = {
    dataCategory: 'dataCm',
    questions: [
        {
            question: 'Name as many CM offices as you can in 30 seconds.',
            answers: [
                'Cupertino',
                'Calgary',
                'Sao Paulo',
            ]
        }
    ]
};

/**
 *  Helper Functions
 *
 * TODO: move to separate file
*/
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/**
 * Define a function for initiating a conversation on installation
 * With custom integrations, we don't have a way to find out who installed us, so we can't message them :(
 */
function onInstallation(bot, installer) {
    if (installer) {
        bot.startPrivateConversation({user: installer}, function (err, convo) {
            if (err) {
                console.log(err);
            } else {
                convo.say('I am a bot that has just joined your team');
                convo.say('You must now /invite me to a channel so that I can be of use!');
            }
        });
    }
}


/**
 * Configure the persistence options
 */
var config = {};
if (process.env.MONGOLAB_URI) {
    var BotkitStorage = require('botkit-storage-mongo');
    config = {
        storage: BotkitStorage({mongoUri: process.env.MONGOLAB_URI}),
    };
} else {
    config = {
        json_file_store: ((process.env.TOKEN)?'./db_slack_bot_ci/':'./db_slack_bot_a/'), //use a different name if an app or CI
    };
}

/**
 * Are being run as an app or a custom integration? The initialization will differ, depending
 */
if (process.env.TOKEN || process.env.SLACK_TOKEN) {
    //Treat this as a custom integration
    var customIntegration = require('./lib/custom_integrations');
    var token = (process.env.TOKEN) ? process.env.TOKEN : process.env.SLACK_TOKEN;
    var controller = customIntegration.configure(token, config, onInstallation);
} else if (process.env.CLIENT_ID && process.env.CLIENT_SECRET && process.env.PORT) {
    //Treat this as an app
    var app = require('./lib/apps');
    var controller = app.configure(process.env.PORT, process.env.CLIENT_ID, process.env.CLIENT_SECRET, config, onInstallation);
} else {
    console.log('Error: If this is a custom integration, please specify TOKEN in the environment. If this is an app, please specify CLIENTID, CLIENTSECRET, and PORT in the environment');
    process.exit(1);
}


/**
 * A demonstration for how to handle websocket events. In this case, just log when we have and have not
 * been disconnected from the websocket. In the future, it would be super awesome to be able to specify
 * a reconnect policy, and do reconnections automatically. In the meantime, we aren't going to attempt reconnects,
 * WHICH IS A B0RKED WAY TO HANDLE BEING DISCONNECTED. So we need to fix this.
 *
 * TODO: fixed b0rked reconnect behavior
 */
// Handle events related to the websocket connection to Slack
controller.on('rtm_open', function (bot) {
    console.log('** The RTM api just connected!');
});

controller.on('rtm_close', function (bot) {
    console.log('** The RTM api just closed');
    // you may want to attempt to re-open
});


/**
 * Core bot logic goes here!
 */
// Global Trivia Variables
let currentQuestion;

// Entering a Channel
controller.on('bot_channel_join', function (bot, message) {
    bot.reply(message, "I'm here let's play!");
});

// Friendly Commands
// options:
// hello, hi, whats up, yo
controller.hears(['hi', 'whats up', 'yo'], ['direct_message', 'mention', 'direct_mention'], function (bot, message) {
    bot.reply(message, 'Hi There!');
});

// Play Commands
// options:
// play all -- only one working right now
// play general
// play sports
// play movies
// play cm -- play critical mass
controller.hears('(play all|play general|play sports|play movies|play cm)', ['direct_mention', 'mention', 'direct_message'], function(bot, message) { // TODO: make this take in multiple play options
    // set correct data
    var data = dataAll;

    if (message.text === 'play general') {
        data = dataGeneral;
    } else if (message.text === 'play sports') {
        data = dataSports;
    } else if (message.text === 'play movies') {
        data = dataMovies;
    } else if (message.text ===  'play cm') {
        data = dataCm;
    }

    // get a random question from data
    currentQuestion = getRandomInt(data.questions.length);

    // reply to the message with a trivia question
    bot.reply(message, 'Playing All Categories!');
    bot.reply(message, data.questions[currentQuestion].question);

    // start round
    // let the rest of the functionality for each round come from here:
    startRound(data, currentQuestion);
});

// Stop Commands
controller.hears(['STOP'], ['direct_mention', 'mention', 'message', 'direct_message'], function(bot, message) {
    console.log(message.text);
    bot.reply(message, 'round stopped!');
    // stop
});

function startRound(roundData, currentQuestion) {
    var answerLength = roundData.questions[currentQuestion].answers.length; // number of answers
    var roundType = roundData.dataCategory; // data category
    var roundAnswers = roundData.questions[currentQuestion].answers;

    // if bot hears one of the answers.. track who answered it.. notify it was answered..
    console.log(roundData.questions[currentQuestion].answers);
    controller.hears(roundData.questions[currentQuestion].answers, ['ambient'], function (bot, message) {
        // correct answer
        console.log('correct');
        bot.reply(message, 'correct');
    });

    // if bot hears same answer twice.. notify it has been answered by whom

    // start a timer with end round callback
    // each timer will be 30 seconds for now
    setTimeout(30000, endRound);
}

function endRound(roundType, currentQuestion) {
    console.log('end round');

    // stop tracking

    // notify round has ended
    // bot.reply(message, 'Round ended!');

    // notify

    // add missed function
}


/**
 * AN example of what could be:
 * Any un-handled direct mention gets a reaction and a pat response!
 */
// controller.on('direct_message,mention,direct_mention', function (bot, message) {
//    bot.api.reactions.add({
//        timestamp: message.ts,
//        channel: message.channel,
//        name: 'robot_face',
//    }, function (err) {
//        if (err) {
//            console.log(err)
//        }
//        bot.reply(message, 'I heard you loud and clear boss.');
//    });
// });


// Starts Round functionality
