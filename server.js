const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port)
