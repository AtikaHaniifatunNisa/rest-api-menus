import express from 'express'
import * as controller from './menu.controller.js'

const router = express.Router()

router.get('/menus', controller.getAll)
router.get('/menus/:id', controller.getById)
router.post('/menus', controller.create)
router.put('/menus/:id', controller.update)
router.delete('/menus/:id', controller.remove)

export default router