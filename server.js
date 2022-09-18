const express = require('express')

const app = express()

app.get('/', (req, res) => {
   res.send("SErver is running")
}
)
const PORT = 5001 || process.env.PORT
app.listen(PORT, () => {
    console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`)
})