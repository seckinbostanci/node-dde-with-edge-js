var dde = require("../index.js");

var client;

function test() {
  client = dde.createClient("MT4", "QUOTE");

  console.log(`SERVICE: ${client.service()}`);
  console.log(`TOPIC: ${client.topic()}`);
  console.log(`IS DISCONNECTED: ${client.isConnected()}`);
  console.log(`IS PAUSED: ${client.isPaused()}`);

  client.connect();

  console.log(client.isConnected());

  client.on("disconnected", function (
    service,
    topic,
    isDisposed,
    isServerInitiated
  ) {
    console.log(
      "OnDsconnected: " +
        "Service: " +
        service +
        ", Topic: " +
        topic +
        ", IsDisposed: " +
        isDisposed +
        ", IsServerInitiated: " +
        isServerInitiated
    );
  });

  client.on("advise", function (service, topic, item, text) {
    console.log(
      "OnAdvise: " +
        "Service: " +
        service +
        ", Topic: " +
        topic +
        ", Item: " +
        item +
        ", Text: " +
        text
    );
  });

  client.startAdvise("KGREUR");
}
