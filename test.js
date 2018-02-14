var Slack = require('slack-node');
 
webhookUrl = "";
 
slack = new Slack();
slack.setWebhook(webhookUrl);
 
slack.webhook({
  channel: "#general",
  username: "webhookbot",
  text: "test monica"
}, function(err, response) {
  console.log(response);
});