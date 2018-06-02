const path = require('path')
const chokidar = require('chokidar')
const express = require('express')
const compress = require('compression')
const bodyParser = require('body-parser')
const execa = require('execa')

// get port
const port = parseInt(process.env.PORT, 10)

// create express instance
const app = express()

// use body parser for api requests
app.use(bodyParser.json())

// Use router for API calls
app.use('/api', (req, res, next) => {
  require(path.resolve('api/router'))(req, res, next) // eslint-disable-line
})

// listen for changes to files in /api/
const watcher = chokidar.watch(path.resolve('./api/'))
watcher.on('ready', () => {
  watcher.on('all', () => {
    execa.shell('eslint -c .eslintrc.js --ext .js ./api --color always').then((result) => {
      console.log('Updated backend')
    }).catch(err => console.log(err.stdout))
    // clear require cache and re require new files after change
    Object.keys(require.cache).forEach((id) => {
      if (/[/]api[/]/.test(id)) delete require.cache[id]
    })
  })
})

// start server
app.listen(port + 30)

// start Gatsby
const startGatsby = () => {
  execa.shell(`FORCE_COLOR=true gatsby develop --port ${port}`, [], { stdio: 'inherit' }).stdout.pipe(process.stdout)
}

// lint ./api
execa.shell('eslint -c .eslintrc.js --ext .js ./api').then((result) => {
  startGatsby()
}).catch((err) => {
  console.log(err.stdout)
  startGatsby()
})

// export app
module.exports = app
