'use strict'
const Slack = require('slack');


module.exports.run = async (data) => {
  const dataObject = JSON.parse(data.body);


  let response = {
    statusCode: 200,
    body: {},
    headers: { 'X-Slack-No-Retry': 1 }
  }

  try {
    if (!('X-Slack-Retry-Num' in data.headers)) {
      switch (dataObject.type) {
        case 'url_verification':
          response.body = verifyCall(dataObject);
          break;
        case 'event_callback':

          if (!dataObject.event.thread_ts) {
            const params = {
              token: "xoxb-2064394357792-2037780917190-nGxsJDUM8fquW6DDfSQBPH3K",
              channel: dataObject.event.channel,
              text: 'Hello, can you specify URL with error?',
              thread_ts: dataObject.event.ts
            }

            Slack.chat.postMessage(params);
          }

          response.body = { ok: true }

          break;

      }
    }
  }
  catch (err) {

  }
  finally {
    return response;
  }

}

function verifyCall(data) {
  if (data.token == 'fuGh3JY43uluIBwE98ufqF81') { 
    return data.challenge;
  }
  else{
    throw 'Verification Code Error'
  }
}