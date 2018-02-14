const { WebClient } = require('@slack/client');

// An access token (from your Slack app or custom integration - xoxp, xoxb, or xoxa)
const token ='';

const web = new WebClient(token);

// The first argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const channelId = '#random';

// See: https://api.slack.com/methods/chat.postMessage
web.chat.postMessage(channelId, 'Hello there monica')
  .then((res) => {
    // `res` contains information about the posted message
    console.log('Message sent: ', res.ts);
  })
  .catch(console.error);