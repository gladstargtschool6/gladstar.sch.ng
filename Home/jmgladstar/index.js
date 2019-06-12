const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello from Google App Engine!'))

app.get('/teapot', (req, res) => {
  res.status(418).send("Hello I'm a teapot running on Node Standard GAE")
})

app.listen(process.env.port || 8080, () =>
  console.log('Example app listening on port 3000!')
)
