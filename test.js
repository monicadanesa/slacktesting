var Slack = require('slack-node');
 
webhookUri = "";
 
slack = new Slack();
slack.setWebhook(webhookUri);
 
slack.webhook({
  channel: "#general",
  username: "webhookbot",
  text: "test monica"
}, function(err, response) {
  console.log(response);
});