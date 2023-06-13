const express = require('express')
const router = express.Router()
const {getProduct,postProduct, getAllProduct} = require('../controller/productcontroller')
const{postUser,getUser,showUser,authenticationToken, editUser} = require('../controller/usercontroller')


router.get('/product/:id',getProduct)
router.get('/shop',getAllProduct)
router.post('/add',postProduct)
router.post('/newuser',postUser)
router.post('/getuser', getUser)
router.post('/edituser',authenticationToken,showUser)
router.put('/editdata',authenticationToken,editUser)

module.exports=router