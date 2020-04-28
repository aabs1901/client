let express = require('express')
let bodyParser = require('body-parser')
let path = require('path')
let api_routes = require('./routes/api.js')

let app =express()
app.use(bodyParser.json())



app.use(expres.static(path.join(____dirname, 'student-sign-in-client','dist')))

app.use('/api', api_routes)


app.use(function( err, req, res, next,){
    res.status(404).send("no found")
})

app.use(function( err, req, res, next){
    console.error(err.stack)
    res.status(500).send('server error')

})


let server = app.listen(process.env.PORT || 3000, function(){
    console.log('Express server running on port', server.address().port )
})