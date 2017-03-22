const {Client, MemoryStorage} = require('cozy-client-js')

const token = JSON.parse(require("fs").readFileSync(__dirname + "/../token.json", "utf-8"))

token.token.toAuthHeader = function() {
  return 'Bearer ' + token.client.registrationAccessToken
}

const cozy = new Client({
  cozyURL: 'http://cozy.local:8080',
  oauth: {storage: new MemoryStorage()}
})

cozy.saveCredentials(token.client, token.token)

module.exports = cozy

