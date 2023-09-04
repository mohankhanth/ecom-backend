const express = require('express')
const app = express()
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const userRouter = require('./router/user');
const productRouter = require('./router/product');
const orderRouter = require('./router/order');
const categoryRouter = require('./router/category');
const connectDB = require('./db/connect');
require('dotenv').config()
const notFound = require('./middleware/not-found');

app.use(express.json());
app.use(morgan('dev'));
// Use Helmet!
app.use(helmet());
app.use(cors())

// app.use('/', (req,res) => {
//     res.json({"mes": 'Welcome to home page'})
// });

app.use('/api/v1/user', userRouter);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/order', orderRouter);
app.use('/api/v1/category', categoryRouter);




app.use(notFound);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

// https://github.com/itsmefarhan/nodejs-cloudinary-crud-operations/blob/master/routes/user.js