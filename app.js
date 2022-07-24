const express = require("express");
const app = express()
const cors = require('cors');
require("./connection/database");
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname+'/product'));


const customerRouter = require("./router/customerRouter");
app.use(customerRouter);

const staffRouter = require("./router/staffRouter");
app.use(staffRouter);

const productRouter = require("./router/productRouter");
app.use(productRouter);

const categoryRouter = require("./router/categoryRouter");
app.use(categoryRouter);




app.listen(90)