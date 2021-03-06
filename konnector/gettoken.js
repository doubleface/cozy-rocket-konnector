const http = require('http');
const {Client,MemoryStorage} = require('cozy-client-js')
const manifest = require('./lib/manifest')

const scopes = manifest.getScopes(__dirname + '/manifest.konnector')

function onRegistered(client, url) {
  let server
    return new Promise((resolve) => {
      server = http.createServer((request, response) => {
        if (request.url.indexOf('/do_access') === 0) {
          console.log('Received access from user with url', request.url)
            resolve(request.url)
            response.end()
        }
      })
      server.listen(3333, () => {
        console.log('Please visit the following url to authorize the application: ', url)
      })
    })
  .then(
      (url) => { server.close(); return url; },
      (err) => { server.close(); throw err; }
      )
}

const cozy = new Client({
  cozyURL: 'http://cozy.local:8080',
  oauth: {
    storage: new MemoryStorage(),
    clientParams: {
      redirectURI: 'http://localhost:3333/do_access',
      softwareID: 'foobar',
      clientName: 'client',
      scopes: scopes
    },
    onRegistered: onRegistered,
  }
})

cozy.authorize().then((creds) => {
  require("fs").writeFileSync(__dirname + "/token.json", JSON.stringify(creds))
  console.log("File saved in " + __dirname + "/token.json")
  process.exit()
})


