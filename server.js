let express = require('express')
let bodyParser = require('body-parser')
let path = require('path')
let api_routes = require('./routes/api.js')
// app config
let app =express()
app.use(bodyParser.json())



app.use(express.static(path.join(__dirname, 'student-sign-in-client','dist')))

app.use('/api', api_routes)

// Route not found
app.use(function( req, res, next,){
    res.status(404).send("Not found")
})
// Server errors
app.use(function( err, req, res, next){
    console.error(err.stack)
    res.status(500).send('server error')

})

// runnung server
let server = app.listen(process.env.PORT || 3000, function(){
    console.log('Express server running on port', server.address().port )
})