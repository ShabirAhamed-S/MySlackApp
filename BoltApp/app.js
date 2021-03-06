require('dotenv/config')

const { App } = require('@slack/bolt');

const TOKEN = process.env.SLACK_TOKEN
const SECRET = process.env.SLACK_SIGNING_SECRET
const PORT = process.env.SLACK_PORT

// Initializes your app with your bot token and signing secret
const app = new App({
  token: TOKEN,
  signingSecret: SECRET
});

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say({
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `Hey there <@${message.user}>!`
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Click Me"
          },
          "action_id": "button_click"
        }
      }
    ],
    text: `Hey there <@${message.user}>!`
  });
});

// app.action('button_click', async ({ body, ack, say }) => {
//   // Acknowledge the action
//   await ack();
//   await say(`<@${body.user.id}> clicked the button`);
// })

  (async () => {
    // Start your app
    await app.start(PORT);

    console.log(`⚡️ Bolt app is running! ${PORT}`);
  })();