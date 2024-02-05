const app = require('./src/app')

const PORT = 3000

app.use((req, res) => {
    res.status(404).send("We can't find the movie mate")
})

app.listen(PORT, () => {
    console.log(`we're listening on port ${PORT}`)
})