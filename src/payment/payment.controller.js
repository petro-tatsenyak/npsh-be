import CloudIpsp from 'cloudipsp-node-js-sdk';
import { FONDY_MERCHANT_ID, FONDY_SECRET_KEY, SERVER_URL, CLIENT_URL } from '../config';
import orderService from '../orders/order.service';

const getCheckoutLink = async (req, res, next) => {
  const { order_id, amount } = req.query;

  try {
    const fondy = new CloudIpsp({
      merchantId: FONDY_MERCHANT_ID,
      secretKey: FONDY_SECRET_KEY,
    });

    const data = {
      server_callback_url: `${SERVER_URL}/orders/${order_id}`,
      response_url: `${SERVER_URL}/orders/${order_id}`,
      order_id,
      order_desc: 'Books order',
      currency: 'UAH',
      amount: amount * 100,
    };

    const response = await fondy.Checkout(data);

    await orderService.updateOrderById(order_id, { payment_id: response.payment_id });

    return res.json(response);
  } catch (error) {
    return next(error);
  }
};

const updatePaymentStatus = async (req, res, next) => {
  const { id } = req.params;

  try {
    const fondy = new CloudIpsp({
      merchantId: FONDY_MERCHANT_ID,
      secretKey: FONDY_SECRET_KEY,
    });

    const status = await fondy.Status({ order_id: id });

    const update = {
      payment: {
        paymentMethod: 'fondy',
      },
      isPaid: status.order_status === 'approved',
      paidAt: status.order_status === 'approved' ? Date.now() : null,
    };

    const order = await orderService.updateOrderById(req.params.id, update);

    if (!order) {
      return res.status(404).send({ message: 'Order Not Found' });
    }
    return res.writeHead(301, {
      Location: `${CLIENT_URL}/order/${req.params.id}`,
    }).end();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getCheckoutLink,
  updatePaymentStatus,
};
