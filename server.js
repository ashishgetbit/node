const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app = express()

app.get('/', (req, res) => {
   res.send("SErver is running")
}
)
const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`)
})