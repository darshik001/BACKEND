const express = require('express')
const dbConnection = require('./config/dbConaction')
const routes = require('./routes/studdent.routes');
const port = 8000;
const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded())


//connection
dbConnection()
app.use('/',routes)
app.listen(port, () => {
    console.log(`server start at http://localhost:${port}`)
})