const app = require('app.js')

app.listen(app.get('port'), (err)=> {
    if(err){
        console.log( `There is an error : ${err}` )
    }else{
        console.log(`Server runing on port ${app.get('port')}`)
    }
})