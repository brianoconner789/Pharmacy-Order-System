// __tests__/healthMartIntegration.test.ts
import { HealthMartIntegration } from '../src/pharmacy/HealthMartIntegration';

describe('HealthMartIntegration', () => {
  let healthMartIntegration: HealthMartIntegration;

  beforeEach(() => {
    healthMartIntegration = new HealthMartIntegration();
  });

  test('creates an order in HealthMart', () => {
    const orderPayload = {
      healthMartProduct: 'Painkiller',
      healthMartQuantity: 3,
    };

    const order = healthMartIntegration.createOrder(orderPayload);

    expect(order).toHaveProperty('orderId');
    expect(order.product).toEqual(orderPayload.healthMartProduct);
    expect(order.quantity).toEqual(orderPayload.healthMartQuantity);
  });

  // We can add more tests for getOrders() and getOrderbyId later on through similar pattern. 
});
