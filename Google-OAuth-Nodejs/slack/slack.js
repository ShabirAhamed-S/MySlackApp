const Axios = require('axios')

let postCall =
  (async function () {
    await Axios.post(
      `https://hooks.slack.com/services/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`,
      {
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `Alert! Alert! Gmail Sign in is off get back to login page`,
            }
          }
        ]
      })
  })
    ()


let post =
  (async function () {
    await Axios.post(
      `https://hooks.slack.com/services/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`,
      {
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `Alert! Alert! Gmail Sign in is on`,
            },
          },
        ],
      })
  }
  )()

module.exports = {
  post, postCall
}