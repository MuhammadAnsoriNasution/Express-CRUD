import { Request, Response } from "express"
import controller from '../controllers/article'
const express = require('express')
const router = express.Router()

router.get('/', controller.findAll)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.deleteData)
router.get('/:id', controller.findOne)

module.exports = router