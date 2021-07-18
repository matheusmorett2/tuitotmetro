const brain = require('brain.js');
const data = require('./data/lula_and_bolsonaro.json');    
const fs = require("fs");

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
  input: item.input,
  output: item.output
}));

console.log("Train data", trainingData)

console.log("Inicio: ", new Date())

network.train(trainingData, {
  log: (error) => console.log(error),
  iterations: 1,
});

// Save network state to JSON file.
const networkState = network.toJSON();
fs.writeFileSync("model/network_state_lula_and_bolsonaro.json",  JSON.stringify(networkState), "utf-8");

console.log("Finalizou: ", new Date())
