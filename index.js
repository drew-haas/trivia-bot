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
                "Afghanistan",
                "Åland Islands",
                "Albania",
                "Algeria",
                "American Samoa",
                "AndorrA",
                "Angola",
                "Anguilla",
                "Antarctica",
                "Antigua and Barbuda",
                "Argentina",
                "Armenia",
                "Aruba",
                "Australia",
                "Austria",
                "Azerbaijan",
                "Bahamas",
                "Bahrain",
                "Bangladesh",
                "Barbados",
                "Belarus",
                "Belgium",
                "Belize",
                "Benin",
                "Bermuda",
                "Bhutan",
                "Bolivia",
                "Bosnia and Herzegovina",
                "Botswana",
                "Bouvet Island",
                "Brazil",
                "British Indian Ocean Territory",
                "Brunei Darussalam",
                "Bulgaria",
                "Burkina Faso",
                "Burundi",
                "Cambodia",
                "Cameroon",
                "Canada",
                "Cape Verde",
                "Cayman Islands",
                "Central African Republic",
                "Chad",
                "Chile",
                "China",
                "Christmas Island",
                "Cocos (Keeling) Islands",
                "Colombia",
                "Comoros",
                "Congo",
                "Congo, The Democratic Republic of the",
                "Cook Islands",
                "Costa Rica",
                "Cote D'Ivoire",
                "Croatia",
                "Cuba",
                "Cyprus",
                "Czech Republic",
                "Denmark",
                "Djibouti",
                "Dominica",
                "Dominican Republic",
                "Ecuador",
                "Egypt",
                "El Salvador",
                "Equatorial Guinea",
                "Eritrea",
                "Estonia",
                "Ethiopia",
                "Falkland Islands (Malvinas)",
                "Faroe Islands",
                "Fiji",
                "Finland",
                "France",
                "French Guiana",
                "French Polynesia",
                "French Southern Territories",
                "Gabon",
                "Gambia",
                "Georgia",
                "Germany",
                "Ghana",
                "Gibraltar",
                "Greece",
                "Greenland",
                "Grenada",
                "Guadeloupe",
                "Guam",
                "Guatemala",
                "Guernsey",
                "Guinea",
                "Guinea-Bissau",
                "Guyana",
                "Haiti",
                "Heard Island and Mcdonald Islands",
                "Holy See (Vatican City State)",
                "Honduras",
                "Hong Kong",
                "Hungary",
                "Iceland",
                "India",
                "Indonesia",
                "Iran, Islamic Republic Of",
                "Iraq",
                "Ireland",
                "Isle of Man",
                "Israel",
                "Italy",
                "Jamaica",
                "Japan",
                "Jersey",
                "Jordan",
                "Kazakhstan",
                "Kenya",
                "Kiribati",
                "Korea, Democratic People's Republic",
                "Korea, Republic",
                "Kuwait",
                "Kyrgyzstan",
                "Lao People's Democratic Republic",
                "Latvia",
                "Lebanon",
                "Lesotho",
                "Liberia",
                "Libyan Arab Jamahiriya",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Macao",
                "Macedonia, The Former Yugoslav Republic of",
                "Madagascar",
                "Malawi",
                "Malaysia",
                "Maldives",
                "Mali",
                "Malta",
                "Marshall Islands",
                "Martinique",
                "Mauritania",
                "Mauritius",
                "Mayotte",
                "Mexico",
                "Micronesia, Federated States of",
                "Moldova, Republic of",
                "Monaco",
                "Mongolia",
                "Montserrat",
                "Morocco",
                "Mozambique",
                "Myanmar",
                "Namibia",
                "Nauru",
                "Nepal",
                "Netherlands",
                "Netherlands Antilles",
                "New Caledonia",
                "New Zealand",
                "Nicaragua",
                "Niger",
                "Nigeria",
                "Niue",
                "Norfolk Island",
                "Northern Mariana Islands",
                "Norway",
                "Oman",
                "Pakistan",
                "Palau",
                "Palestinian Territory, Occupied",
                "Panama",
                "Papua New Guinea",
                "Paraguay",
                "Peru",
                "Philippines",
                "Pitcairn",
                "Poland",
                "Portugal",
                "Puerto Rico",
                "Qatar",
                "Reunion",
                "Romania",
                "Russian Federation",
                "RWANDA",
                "Saint Helena",
                "Saint Kitts and Nevis",
                "Saint Lucia",
                "Saint Pierre and Miquelon",
                "Saint Vincent and the Grenadines",
                "Samoa",
                "San Marino",
                "Sao Tome and Principe",
                "Saudi Arabia",
                "Senegal",
                "Serbia and Montenegro",
                "Seychelles",
                "Sierra Leone",
                "Singapore",
                "Slovakia",
                "Slovenia",
                "Solomon Islands",
                "Somalia",
                "South Africa",
                "South Georgia and the South Sandwich Islands",
                "Spain",
                "Sri Lanka",
                "Sudan",
                "Suriname",
                "Svalbard and Jan Mayen",
                "Swaziland",
                "Sweden",
                "Switzerland",
                "Syrian Arab Republic",
                "Taiwan, Province of China",
                "Tajikistan",
                "Tanzania, United Republic of",
                "Thailand",
                "Timor-Leste",
                "Togo",
                "Tokelau",
                "Tonga",
                "Trinidad and Tobago",
                "Tunisia",
                "Turkey",
                "Turkmenistan",
                "Turks and Caicos Islands",
                "Tuvalu",
                "Uganda",
                "Ukraine",
                "United Arab Emirates",
                "United Kingdom",
                "United States",
                "United States Minor Outlying Islands",
                "Uruguay",
                "Uzbekistan",
                "Vanuatu",
                "Venezuela",
                "Viet Nam",
                "Virgin Islands, British",
                "Virgin Islands, U.S.",
                "Wallis and Futuna",
                "Western Sahara",
                "Yemen",
                "Zambia",
                "Zimbabwe",
            ]
        },
        {
            question: 'Name as many of the wealthiest people on the Forbes 100 list in 30 seconds.',
            answers: [
                "Jeff Bezos",
                "Bill Gates",
                "Warren Buffett",
                "Bernard Arnault",
                "Carlos Slim Helu",
                "Amancio Ortega",
                "Larry Ellison",
                "Mark Zuckerberg",
                "Michael Bloomberg",
                "Larry Page",
                "David Koch",
                "Charles Koch",
                "Mukesh Ambani",
                "Sergey Brin",
                "Francoise Bettencourt Meyers",
                "Jim Walton",
                "Alice Walton",
                "Rob Walton",
                "Steve Ballmer",
                "Ma Huateng",
                "Jack Ma",
                "Hui Ka Yan",
                "Beate Heister & Karl Albrecht Jr.",
                "Sheldon Adelson",
                "Michael Dell",
                "Phil Knight",
                "David Thomson",
                "Li Ka-shing",
                "Lee Shau Kee",
                "François Pinault",
                "Joseph Safra",
                "Leonid Mikhelson",
                "John Mars",
                "Jacqueline Mars",
                "Jorge Paulo Lemann",
                "Azim Premji",
                "Dieter Schwarz",
                "Wang Jianlin",
                "Giovanni Ferrero",
                "Elon Musk",
                "Tadashi Yanai",
                "Yang Huiyan",
                "Masayoshi Son",
                "Jim Simons",
                "Vladimir Lisin",
                "Susanne Klatten",
                "Vagit Alekperov",
                "Alexey Mordashov",
                "Gennady Timchenko",
                "Leonardo Del Vecchio",
                "He Xiangjian",
                "Rupert Murdoch",
                "Dietrich Mateschitz",
                "Laurene Powell Jobs",
                "R. Budi Hartono",
                "Michael Hartono",
                "Ray Dalio",
                "Vladimir Potanin",
                "Len Blavatnik",
                "Stefan Quandt",
                "Carl Icahn",
                "Theo Albrecht, Jr.",
                "Lee Man Tat",
                "Thomas Peterffy",
                "Joseph Lau",
                "Hinduja brothers",
                "Lee Kun-hee",
                "Donald Bren",
                "Takemitsu Takizaki",
                "Zhang Yiming",
                "Stefan Persson",
                "Abigail Johnson",
                "Petr Kellner",
                "Iris Fontbona",
                "Gina Rinehart",
                "Lukas Walton",
                "Dhanin Chearavanont",
                "Kwong Siu-hing",
                "Pallonji Mistry",
                "Mikhail Fridman",
                "William Ding",
                "Leonard Lauder",
                "Lui Che Woo",
                "Shiv Nadar",
                "Alain Wertheimer",
                "Gerard Wertheimer",
                "Charoen Sirivadhanabhakdi",
                "Emmanuel Besnier",
                "Charlene de Carvalho-Heineken",
                "Andrey Melnichenko",
                "Lakshmi Mittal",
                "Heinz Hermann Thiele",
                "Li Shufu",
                "Hasso Plattner",
                "Colin Huang",
                "Dietmar Hopp",
                "Georg Schaeffler",
                "German Larrea Mota Velasco",
                "Zhang Zhidong",
                "Stephen Schwarzman"
            ]
        },
        {
            question: 'Name as many states in the USA as you can in 30 seconds.',
            answers: [
                'Alabama',
                'Alaska',
                'Arizona',
                'Arkansas',
                'California',
                'Colorado',
                'Connecticut',
                'Delaware',
                'District Of Columbia',
                'Florida',
                'Georgia',
                'Hawaii',
                'Idaho',
                'Illinois',
                'Indiana',
                'Iowa',
                'Kansas',
                'Kentucky',
                'Louisiana',
                'Maine',
                'Maryland',
                'Massachusetts',
                'Michigan',
                'Minnesota',
                'Mississippi',
                'Missouri',
                'Montana',
                'Nebraska',
                'Nevada',
                'New Hampshire',
                'New Jersey',
                'New Mexico',
                'New York',
                'North Carolina',
                'North Dakota',
                'Ohio',
                'Oklahoma',
                'Oregon',
                'Pennsylvania',
                'Rhode Island',
                'South Carolina',
                'South Dakota',
                'Tennessee',
                'Texas',
                'Utah',
                'Vermont',
                'Virginia',
                'Washington',
                'West Virginia',
                'Wisconsin',
                'Wyoming'
            ]
        },
        {
            question: 'Name as many elements on the periodic table as you can.',
            answers: [
                "Hydrogen",
                "Helium",
                "Lithium",
                "Beryllium",
                "Boron",
                "Carbon",
                "Nitrogen",
                "Oxygen",
                "Fluorine",
                "Neon",
                "Sodium",
                "Magnesium",
                "Aluminum",
                "Silicon",
                "Phosphorus",
                "Sulfur",
                "Chlorine",
                "Argon",
                "Potassium",
                "Calcium",
                "Scandium",
                "Titanium",
                "Vanadium",
                "Chromium",
                "Manganese",
                "Iron",
                "Cobalt",
                "Nickel",
                "Copper",
                "Zinc",
                "Gallium",
                "Germanium",
                "Arsenic",
                "Selenium",
                "Bromine",
                "Krypton",
                "Rubidium",
                "Strontium",
                "Yttrium",
                "Zirconium",
                "Niobium",
                "Molybdenum",
                "Technetium",
                "Ruthenium",
                "Rhodium",
                "Palladium",
                "Silver",
                "Cadmium",
                "Indium",
                "Tin",
                "Antimony",
                "Tellurium",
                "Iodine",
                "Xenon",
                "Cesium",
                "Barium",
                "Lanthanum",
                "Cerium",
                "Praseodymium",
                "Neodymium",
                "Promethium",
                "Samarium",
                "Europium",
                "Gadolinium",
                "Terbium",
                "Dysprosium",
                "Holmium",
                "Erbium",
                "Thulium",
                "Ytterbium",
                "Lutetium",
                "Hafnium",
                "Tantalum",
                "Tungsten",
                "Rhenium",
                "Osmium",
                "Iridium",
                "Platinum",
                "Gold",
                "Mercury",
                "Thallium",
                "Lead",
                "Bismuth",
                "Polonium",
                "Astatine",
                "Radon",
                "Francium",
                "Radium",
                "Actinium",
                "Thorium",
                "Protactinium",
                "Uranium",
                "Neptunium",
                "Plutonium",
                "Americium",
                "Curium",
                "Berkelium",
                "Californium",
                "Einsteinium",
                "Fermium",
                "Mendelevium",
                "Nobelium",
                "Lawrencium",
                "Rutherfordium",
                "Dubnium",
                "Seaborgium",
                "Bohrium",
                "Hassium",
                "Meitnerium",
                "Darmstadtium",
                "Roentgenium",
                "Copernicium",
                "Nihonium",
                "Flerovium",
                "Moscovium",
                "Livermorium",
                "Tennessine",
                "Oganesson"
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

function arrayContains(needle, arrhaystack) {
    return (arrhaystack.indexOf(needle) > -1);
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
let currentQuestion,
    remainingAnswers,
    correctAnswers = [],
    roundResults = [],
    allResults = [],
    timeout,
    gameActive = false;

/**
 * Entering a channel
 */
controller.on('bot_channel_join', function (bot, message) {
    bot.reply(message, "I'm here let's play!");
});

/**
 * Help Commands
 */
controller.hears('help', ['direct_mention', 'mention', 'direct_message'], function(bot, message) {
    bot.reply(message, 'Hello I\'m Trivia Bot. I\'m here to play Trivia Games with your Team!\n\nPlay Options include: `@triviabot play all | play general | play sports | play movies | play cm`\n`STOP` to end the current game\n`SCORE` to get the current or total scores\n\n_Each round (currently) only lasts 30 seconds. Just like Tyler_');
});

/**
 * Play Commands
 * example: @triviabot play all
 *
 * options:
 * play all
 * play general
 * play sports
 * play movies
 * play cm -- play critical mass related questions
 *
 */
controller.hears('(play all|play general|play sports|play movies|play cm)', ['direct_mention', 'mention', 'direct_message'], function(bot, message) { // TODO: make this take in multiple play options
    // set correct data
    var data = dataAll;
    gameActive = true;

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
    remainingAnswers = data.questions[currentQuestion].answers.map(x => x.toLowerCase());

    // reply to the message with a trivia question
    bot.reply(message, data.questions[currentQuestion].question);

    // start round
    // let the rest of the functionality for each round come from here:
    startRound(data, currentQuestion);

    // start a timer with end round callback
    // each timer will be 30 seconds for now
    timeout = setTimeout(function() {
        console.log('Times up.. remaining answers:', remainingAnswers);

        bot.reply(message, 'Time\'s up!');
        bot.reply(message, '*Round Scores:*');
        for (var i = 0; i <= roundResults.length - 1; i++) {
            bot.reply(message, '<@' + roundResults[i].userid + '> with *' + roundResults[i].score + ' points*');
        }

        // reset
        gameActive = false;
        currentQuestion = null;
        roundData = null;
    }, 30000);
});

/**
 * Stop Commands
 */
controller.hears(['STOP'], ['direct_mention', 'mention', 'ambient', 'direct_message'], function(bot, message) {
    if (gameActive) {
        gameActive = false;

        var leftovers = remainingAnswers;
        bot.reply(message, 'Round Stopped!');
        bot.reply(message, '*Round Scores:*');
        for (var i = 0; i <= roundResults.length - 1; i++) {
            bot.reply(message, '<@' + roundResults[i].userid + '> with *' + roundResults[i].score + ' points*');
        }
        // bot.reply(message, 'round stopped! \n here\'s what you missed:' + leftovers);

        // stop listening/clear answers
        remainingAnswers = [];

        // cancel current timeout
        clearTimeout(timeout);

    } else {
        bot.reply(message, 'No active game right now. Play a game by messaging "@triviabot play all".');
    }
});

/**
 * Display Score
 */
controller.hears(['SCORE', 'score'], ['direct_mention', 'mention', 'ambient', 'direct_message'], function(bot, message) {
    if (gameActive) {
        bot.reply(message, '*Round Scores:*');
        for (var i = 0; i <= roundResults.length - 1; i++) {
            bot.reply(message, '<@' + roundResults[i].userid + '> with *' + roundResults[i].score + ' points*');
        }
    } else {
        bot.reply(message, '_No current game being played_ \n Here are the *Total Scores:*');
        for (var i = 0; i <= allResults.length - 1; i++) {
            bot.reply(message, '<@' + allResults[i].userid + '> with *' + allResults[i].score + ' points*');
        }
    }
});

/**
 * Round Functionality
 */
function startRound(roundData, currentQuestion) {
    // if bot hears one of the answers.. track who answered it.. notify it was answered..
    controller.hears(remainingAnswers, ['ambient'], function (bot, message) {
        // correct answer
        // display data
        bot.reply(message, message.text + ' is Correct! <@' + message.user + '>');

        // keep score
        // check if user id matches
        // TODO: make this more dynamic for multiple arrays
        var pos = roundResults.map(function(e) { return e.userid; }).indexOf(message.user);
        var pos2 = allResults.map(function(e) { return e.userid; }).indexOf(message.user);
        if (pos != -1) {
            // match -- update score
            roundResults[pos].score += 1;
        } else {
            // no match -- add user to winners list!
            roundResults.push({userid: message.user, score: 1});
        }

        if (pos2 != -1) {
            // match -- update score
            allResults[pos].score += 1;
        } else {
            // no match -- add user to winners list!
            allResults.push({userid: message.user, score: 1});
        }

        // sort
        roundResults.sort(function(a, b){ return a.score - b.score; });
        allResults.sort(function(a, b){ return a.score - b.score; });

        // remove from remaining answers
        if (remainingAnswers.indexOf(message.text.toLowerCase()) > -1) {
            remainingAnswers.splice(remainingAnswers.indexOf(message.text.toLowerCase()), 1);
        }
    });

    // if bot hears same answer twice.. notify it has been answered by whom
    // controller.hears()
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