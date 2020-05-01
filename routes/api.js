let express = require('express')
let db = require ('../models')
let Student = db.Student
let Sequelize = require('sequelize')

let router = express.Router()

router.get('/students', function(req, res, next) {
    Student.findAll({order:['starID']}).then( students => {
        return res.json(students)
    }).catch( err => next(err))
    
})

router.post('/students/', function( req, res, next){
    Student.create(req.body).then( data => {
        return res.status(201).send('created')
    }).catch( err => {
        if (err instanceof Sequelize.ValidationError){
            let messages = err.errors.map (e=>e.message)
            return res.status(400).json(messages)
        }
        return next( err)
    })


    router.patch('/students/:id', function (req, res, next){
        //updae student
        Student.update(req.body,{ where: {id: req.params.id}} )
        .then( rowsModified => {
            return res.send('ok')

        })
    })
})

router.delete('/students/:id', function(req, res, next){
    Student.destroy( {where:{id: req.params.id}})
    .then( rowsModified =>{
        return res.send('created')
    })
})
module.exports = router