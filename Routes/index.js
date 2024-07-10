import { Router } from "express"
const router= Router()

router.get('/', (req, res) => res.render('index',{ title: 'Inicio'}))

router.get('/Proyectos', (req, res) => res.render('Proyectos',{ title: 'Proyectos'}))

router.get('/Agregar', (req, res) => res.render('Agregar',{ title: 'Proyectos'}))

export default router