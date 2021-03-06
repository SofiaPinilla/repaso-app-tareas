const express = require('express')
const TaskController = require('../controllers/TaskController')
const router = express.Router()

router.post('/',TaskController.create)
router.get('/',TaskController.getAll)
router.get('/_id/:_id',TaskController.getById)
router.put('/markAsCompleted/:_id',TaskController.markAsCompleted)
router.put('/:_id',TaskController.update)
router.delete('/:_id',TaskController.destroy)

module.exports = router