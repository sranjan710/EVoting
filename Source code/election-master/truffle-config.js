module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
     //changed the host ip address and port
      host: "127.0.10.1",
      port: 8585,
      network_id: "*" // Match any network id
    }
  }
};
