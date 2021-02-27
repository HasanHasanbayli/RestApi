const express = require('express');
const morgan = require('morgan');
const app = express();

const productRoutes = require('./api/routes/products');

app.use(morgan('dev'));
app.use('/products', productRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status(404);
    next.error(error);
})

app.use((error, req, res, next) => {
    res.status(errr.status || 500);
    res.json({
        error:{
            message:error.message
        }
    })
})
module.exports = app;