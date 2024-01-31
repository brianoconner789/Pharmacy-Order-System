// src/app/App.ts
import { createExpressApp } from '../utils/ExpressApp';
import { HealthMartIntegration } from '../pharmacy/HealthMartIntegration';
import { OrderService } from '../order/OrderService';

const app = createExpressApp();
const healthMartIntegration = new HealthMartIntegration();
const orderService = new OrderService(healthMartIntegration);

app.post('/healthmart/orders', (req, res) => {
  const orderPayload = req.body;
  try {
    const order = orderService.createOrder(orderPayload);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
});

app.get('/healthmart/orders', (_, res) => {
  const orders = orderService.getAllOrders();
  res.json(orders);
});

app.get('/healthmart/orders/:orderId', (req, res) => {
  const orderId = req.params.orderId;
  const order = orderService.getOrder(orderId);
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
