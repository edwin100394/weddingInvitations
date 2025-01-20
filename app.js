const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.use('/public',express.static('public'))
app.use('/public/css', express.static(path.join('./node_modules/bootstrap/dist/css')))
app.use('/public/js', express.static(path.join('./node_modules/bootstrap/dist/js')))

app.get('/', function (req, res) {
  let html = fs.readFileSync('./index.html','utf-8')
  res.header('Content-Type', 'text/html;charset=utf-8');
  res.send(html)
})

app.listen(80, () => { console.log('listening  8081!') })