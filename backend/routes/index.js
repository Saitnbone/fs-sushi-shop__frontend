const Router = require('express')
const router = new Router()
const categoryRouter = require('./categoryRouter')
const userRouter = require('./userRouter')
const productsRouter = require('./productsRoute')


router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/products', productsRouter)
// router.use('/cart_user')

module.exports = router