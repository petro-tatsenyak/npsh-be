import express from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config';
import userRoute from './users/user.route';
import productRoute from './products/product.route';
import orderRoute from './orders/order.route';
import uploadRoute from './common/routes/upload.route';
import categoryRoute from './categories/category.route';
import deliveryRoute from './delivery/delivery.route';
import paymentController from './payment/payment.controller';

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/uploads', uploadRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/delivery', deliveryRoute);
app.get('/api/config/fondy', paymentController.getCheckoutLink);
app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));


app.listen(config.PORT, () => {
  console.log(`Server started at ${config.SERVER_URL}`);
});
