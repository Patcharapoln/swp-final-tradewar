const server = require('express')()
const Twit = require('twit')
const socketIO = require('socket.io')
const moment = require('moment')
const cors = require('cors')
const {push} = require('./database')

var client = new Twit({
  consumer_key: 'b92OyKrE8suLQoHw97Evjmzh4',
  consumer_secret: 'veC4okqM4fCy6OYdzukBrdgarkkJkDyFTArOOT2IJJdfqowwoR',
  access_token: '407465950-WAXzgtbIxT7crlt7NqHZ8NyL3cc14pAC4DzfWzFb',
  access_token_secret: 'mnCa5gZovRoNiHTyuftW5p1wpN1MgJvP2CDonwjszAtIg'
})

const port = process.env.PORT || '4000'
server.get('/', (req, res) => {
  res.send('Hello')
})

const app = server.listen(port, () => {
  console.log('Server is listening at ' + port)
})

const io = socketIO.listen(app)
io.on('connection', client => {
  console.log('user connected')
  client.on('disconnect', () => {
    console.log('user disconnected')
  })
})


const stream = client.stream('statuses/filter', { track: '#tradewar' })

let data = {
  time: moment()
    .startOf('minute')
    .toISOString(),
  count: 0
}
stream.on('tweet', function(tweet) {
  if (
    moment()
      .startOf('minute')
      .toISOString() !== data.time
  ) {
    console.log(data)
    push(data)
    io.sockets.emit('new-message', data)
    data.time = moment()
      .startOf('minute')
      .toISOString()
    data.count = 0
  } else {
    data.count = data.count + 1
  }
})
