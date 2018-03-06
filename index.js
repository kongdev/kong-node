const express = require('express')
const bodyParser = require('body-parser')
const app = express()
//app.get('/', (req, res) => res.send('Hello World!'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', function (req, res,next) {
    
    res.send('Hello World!')
})


app.use((err, req, res, next) => {
    //console.log("Request data:");
    res.status(err.status || 500);
    res.json({clientData: { status: false}})

})

app.listen(3000, () => console.log('Example app listening on port 3000!'))