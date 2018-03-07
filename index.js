const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const moment = require('moment')
const ipaddr = require('ipaddr.js')


var getIp = (type)=>{
    let addr = ipaddr.parse(ip);
  
    if(addr.kind() == 'ipv6'){

    }
    if(addr.kind() == 'ipv4'){

    }
    //console.log('qqqq')
}

var ip = '2405:9800:bc20:3e2:24cc:ce1a:1d16:6deb'
//console.log(getIp(ip,'ipx'))
//console.log(typeof addr.kind())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


app.get('/', function (req, res,next) {
    console.log(req.connection.remoteAddress)
    res.send('Hello World!')
})


app.use((err, req, res, next) => {
    //console.log("Request data:");
    res.status(err.status || 500);
    res.json({clientData: { status: false}})
})

app.listen(5000, () => console.log('Example app listening on port 3000!'))
