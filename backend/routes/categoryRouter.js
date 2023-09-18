const Router = require('express')
const router = new Router()
const categoryController = require('../controllers/categoryController')

router.post('/')
router.get('/')
router.get('/:id')

module.exports = router