const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    
    // ONLY UNCOMMENT ONE CONNECTION BELOW

    // LHL game server
    host: "165.227.47.243",
    port: "50541"

    // // localhost
    // host: "192.168.1.72",
    // port: "50541"


  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });
  
  conn.on('connect', () => {
    conn.write("Name: IAA");

    // setInterval(function() {
    //   conn.write("Move: up");
    // }, 100);


  });

  // conn.on('connect', () => {
  //   conn.write("Name: IAA");
  // });
  
  return conn;

};


module.exports = {
  connect
};

