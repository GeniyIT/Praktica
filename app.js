const express = require('express')

const app = express()

const pathToStaticDir = __dirname + '/static'
app.use(express.json())
app.use(express.static(pathToStaticDir))
app.use('/', require('./router'))

app.listen(3000)
