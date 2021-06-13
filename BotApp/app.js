require('dotenv/config')

let SlackBot = require('slackbots');
let axios = require('axios');

let bot = new SlackBot({
  name: process.env.NAME,
  token: process.env.TOKEN,
  disconnect : false
});

// Start Handler
bot.on('start', () => {
  const params = {
    icon_emoji: ':cat:'
  };

  bot.postMessageToChannel(
    'general',
    'Get Ready To Laugh With @BOT!',
    params
  );
});

// Error Handler
bot.on('error', err => console.log(err));

// Message Handler
bot.on('message', data => {
  if (data.type !== 'message') {
    return;
  }

  handleMessage(data.text);
});

// Respons to Data
function handleMessage(message) {
  if (message.includes(' chucknorris')) {
    chuckBot();
  } else if (message.includes(' yomama')) {
    yoMamaBot();
  } else if (message.includes(' random')) {
    randomBot();
  } else if (message.includes(' help')) {
    runHelp();
  }
}

// Tell a Chuck Norris bot
function chuckBot() {
  axios.get('http://api.icndb.com/jokes/random').then(res => {
    const bot = res.data.value.bot;
    const params = {
      icon_emoji: ':laughing:'
    };

    bot.postMessageToChannel('general', `Chuck Norris: ${bot}`, params);
  });
}

// Tell a Yo Mama bot
function yoMamaBot() {
  axios.get('http://api.yomomma.info').then(res => {
    const bot = res.data.bot;

    const params = {
      icon_emoji: ':laughing:'
    };

    bot.postMessageToChannel('general', `Yo Mama: ${bot}`, params);
  });
}

// Tell a Random bot
function randomBot() {
  const rand = Math.floor(Math.random() * 2) + 1;
  if (rand === 1) {
    chuckBot();
  } else if (rand === 2) {
    yoMamaBot();
  }
}

// Show Help Text
function runHelp() {
  const params = {
    icon_emoji: ':question:'
  };

  bot.postMessageToChannel(
    'general',
    `Type @BOT with either 'chucknorris', 'yomama' or 'random' to get a BOT`,
    params
  );
}
