import express from 'express'
import {dirname,join} from 'path'
import { fileURLToPath } from 'url'
import path from 'path'
import cors from 'cors'



const port = process.env.PORT || 3000
const { urlencode, json } = express
const app = express()

app.use(cors())
//Inicializar connections

import indexRoutes from './Routes/index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(indexRoutes)


// Uso de contenido estatico y css
app.use(express.static(__dirname+ '/public'))


app.listen(3000)
console.log('Server is listening on port', 3000)