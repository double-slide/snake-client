const { connect } = require("./client");
const { setupInput } = require("./input");


console.log("Connecting ...");

let connectReturn = connect();

setupInput(connectReturn);

