const fs = require('fs') // eslint-disable-line global-require
const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const fetch = require('node-fetch')
const creds = require('../creds')

// fix for deprecation warning
mongoose.Promise = global.Promise

// connect to mongo
mongoose.connect(`mongodb://admin:${creds.password}@lofty-shard-00-00-q3wcm.mongodb.net:27017,lofty-shard-00-01-q3wcm.mongodb.net:27017,lofty-shard-00-02-q3wcm.mongodb.net:27017/${creds.database}?ssl=true&replicaSet=Lofty-shard-0&authSource=admin`)

// create mongo schema
const userSchema = mongoose.Schema({
  username: String,
  password: String,
})

// create mongo model from schema
const User = mongoose.models.User || mongoose.model('User', userSchema)

module.exports = {
  /*
  *
  * Post
  *
  */
  postLogin: (req, res) => {
    // get the username defined in creds.js
    User.find().where('username').equals(creds.username).exec((findErr, users) => {
      if (findErr) res.send(JSON.stringify({ success: false, err: findErr }))
      // check hashed password with value passed to route
      bcrypt.compare(req.body.password, users[0].password, (err, response) => {
        if (err) res.send(JSON.stringify({ success: false, err }))
        else if (!response) res.send(JSON.stringify({ success: false, err: 'incorrect password' }))
        else if (response) {
          // send update to slack channel
          const body = { text: 'This text goes to a slack webhook!' }
          fetch(creds.slack, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
          })
          // send update to frontend
          res.send(JSON.stringify({ success: true }))
        }
      })
    })
  }
}
