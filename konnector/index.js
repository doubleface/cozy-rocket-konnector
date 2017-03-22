const konnector = require('./trainline')
const [un, deux, login, password] = process.argv


konnector.fetch({login, password}, err => {
  console.log('The konnector has been run')
  if (err) console.log(err, 'There was an error')
})
