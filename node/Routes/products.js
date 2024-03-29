const express = require('express');
const router = express.Router();
const { read,list,create,update,remove } = require('../Controller/products')
const { auth } = require('../Middleware/auth')
router.get('/product',auth,list)
router.post('/product/:id',auth,read)
router.post('/product',auth,create)
router.put('/product/:id',auth,update)
router.delete('/product/:id',auth,remove)


module.exports = router;