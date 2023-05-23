const express = require('express')
const router = express.Router()
const {getProduct,postProduct, getAllProduct} = require('../controller/productcontroller')
const{postUser,getUser} = require('../controller/usercontroller')


router.get('/product/:id',getProduct)
router.get('/shop',getAllProduct)
router.post('/add',postProduct)
router.post('/newuser',postUser)
router.post('/getuser', getUser)

module.exports=router