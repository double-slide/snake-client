const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    
    // LHL game server
    host: IP,
    port: PORT
    // // localhost
    // host: "192.168.1.72",
    // port: "50541"
  });

  conn.setEncoding("utf8");
  
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });
  
  conn.on('connect', () => {
    conn.write("Name: IJ");
  });




  return conn;

};





module.exports = {
  connect
};

