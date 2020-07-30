var dde = require("../index.js");

var server;

var id = setInterval(function () {
  server.advise("*", "*");
}, 1000);

function test1() {
  server = dde.createServer("myapp");

  console.log(server.service());
  console.log(server.isRegistered());

  server.on("disconnect", function (service, topic) {
    console.log("OnDisconnect: " + "Service: " + service + ", Topic: " + topic);
  });

  server.on("advise", function (topic, item, format) {
    console.log(
      "OnAdvise: " +
        "Topic: " +
        topic +
        ", Item: " +
        item +
        ", Format: " +
        format
    );
  });

  var i = 0;
  server.onAdvise = function () {
    return "advise-" + i++;
  };

  server.register();

  console.log(server.isRegistered());
}
