const express = require('express')
const path = require("path");
const router = express.Router()

const docs = {
    kirill: ['kirill1.html', 'kirill2.html'],
    artem: ['artem1.html', 'artem2.html', 'artem3.html']
}

router.get('/docs/:filename', (req, res) => {
    res.sendFile(path.join(__dirname, req.url))
})

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs', 'index.html'))
})

router.post('/', (req, res) => {
    const data = req.body.url
    res.send(docs[data])
})


module.exports = router
