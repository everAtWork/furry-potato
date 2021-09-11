const express = require("express")

const port = 2902

const app = express()

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})