const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(`Hello from app!`)
})

app.listen(port, () => console.log("Example app listening on http://localhost:" + port))
