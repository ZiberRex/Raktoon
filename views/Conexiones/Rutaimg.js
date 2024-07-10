const route = require ('express').Router()


route.get('/prueba', (req, res) =>{
    res.json({Message: 'Esto es un mensaje'})
})

module.exports=route 