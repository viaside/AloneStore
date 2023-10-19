const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const path = require('path')
const port = process.env.PORT || 5000;

const User = require('./queries/users');
const Products = require('./queries/products');
const Quantity = require('./queries/quantity_product');
const Category = require('./queries/category');
const Status = require('./queries/status');
const Order = require('./queries/order');
const OrderDetail = require('./queries/order_detail');
const Cart = require('./queries/cart');
const CartDetail = require('./queries/cart_detail');

global.__basedir = __dirname;
app.use("/public", express.static(__dirname + '/public'))
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '50mb,',
    parameterLimit:50000
  })
)
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));


var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, './public/images/')     // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
    callBack(null, file.originalname)
  }
})

var upload = multer({
  storage: storage
});

app.get('/userLogin/:login&:password', User.login)
app.get('/users', User.getUser)
app.get('/users/:id', User.getUserById)
app.post('/users', User.createUser)
app.put('/users/:id', User.updateUser)
app.delete('/users/:id', User.deleteUser)

app.get('/products', Products.getProduct)
app.get('/products/:id', Products.getProductById)
app.post('/products', upload.array('file'), (req, res) => {
  let data = req.body;
  let MainImg = `/public/images/${data.name.replace(" ", "")}_main.jpg`;
  let FrontImg = `/public/images/${data.name.replace(" ", "")}_front.jpg`;
  let BackImg = `/public/images/${data.name.replace(" ", "")}_back.jpg`;

  Products.createProduct(
    data.name, data.desc, data.category, data.price, MainImg, FrontImg, BackImg, data.isOneSize
  )
})
app.put('/products/:id', upload.array('file',), (req, res) => {
  let data = req.body;
  let MainImg = `/public/images/${data.name.replace(" ", "")}_main.jpg`;
  let FrontImg = `/public/images/${data.name.replace(" ", "")}_front.jpg`;
  let BackImg = `/public/images/${data.name.replace(" ", "")}_back.jpg`;

  Products.updateProduct(
    parseInt(req.params.id),data.name, data.desc, data.category, data.price, MainImg, FrontImg, BackImg, data.isOneSize
  )
})
app.delete('/products/:id', Products.deleteProduct)

app.get('/quantity', Quantity.getQuantityProduct)
app.get('/quantity/:id', Quantity.getQuantityProductById)
app.post('/quantity', Quantity.createQuantityProduct)
app.put('/quantity/:id', Quantity.updateQuantityProduct)
app.delete('/quantity/:id', Quantity.deleteQuantityProduct)

app.get('/category', Category.getCategory)
app.get('/category/:id', Category.getCategoryById)
app.post('/category', Category.createCategory)
app.put('/category/:id', Category.updateCategory)
app.delete('/category/:id', Category.deleteCategory)

app.get('/status', Status.getStatus)
app.get('/status/:id', Status.getStatusById)
app.post('/status', Status.createStatus)
app.put('/status/:id', Status.updateStatus)
app.delete('/status/:id', Status.deleteStatus)

app.get('/order', Order.getOrder)
app.get('/order/:id', Order.getOrderById)
app.post('/order', Order.createOrder)
app.put('/order/:id', Order.updateOrder)
app.delete('/order/:id', Order.deleteOrder)

app.get('/orderDetail', OrderDetail.getOrderDetail)
app.get('/orderDetail/:id', OrderDetail.getOrderDetailById)
app.post('/orderDetail', OrderDetail.createOrderDetail)
app.put('/orderDetail/:id', OrderDetail.updateOrderDetail)
app.delete('/orderDetail/:id', OrderDetail.deleteOrderDetail)

app.get('/cart', Cart.getCart)
app.get('/cart/:id', Cart.getCartById)
app.post('/cart', Cart.createCart)
app.put('/cart/:id', Cart.updateCart)
app.delete('/cart/:id', Cart.deleteCart)

app.get('/cartDetail', CartDetail.getCartDetail)
app.get('/cartDetail/:id', CartDetail.getCartDetailById)
app.get('/cartDetailUserId/:id', CartDetail.getCartIdByUserId)
app.put('/cartDetailQuantity/:id', CartDetail.updateQuantity)
app.post('/cartDetail', CartDetail.createCartDetail)
app.put('/cartDetail/:id', CartDetail.updateCartDetail)
app.delete('/cartDetail/:id', CartDetail.deleteCartDetail)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})