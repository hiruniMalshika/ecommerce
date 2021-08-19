const router = require('express').Router()
const productCrtl = require('../controllers/productCtrl')

router.route('/products')
    .get(productCrtl.getProducts)
    .post(productCrtl.createProduct)

router.route('/products/:id')
    .delete(productCrtl.deleteProduct)
    .put(productCrtl.updateProduct)



module.exports = router