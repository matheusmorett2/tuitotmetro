const brain = require('brain.js')
const fs = require('fs')

const net = new brain.recurrent.LSTM();

fs.readFile('model/network_state_lula_and_bolsonaro_10.json', "utf8", function(err, data) {
  if (err) throw err;
  net.fromJSON(JSON.parse(data));
    console.log(net.run("Eu gosto de GRAFENO"))
    console.log(net.run("MST Gleisi PTBrasil Fome"))
});
