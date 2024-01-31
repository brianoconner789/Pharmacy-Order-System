// __tests__/orderService.test.ts
import { OrderService } from '../src/order/OrderService';
import { HealthMartIntegration } from '../src/pharmacy/HealthMartIntegration';

describe('OrderService', () => {
    let orderService: OrderService;
  
    beforeEach(() => {
      const healthMartIntegration = new HealthMartIntegration();
      orderService = new OrderService(healthMartIntegration);
    });
  
    test('creates an order', () => {
      const orderPayload = {
        healthMartProduct: 'Painkiller',
        healthMartQuantity: 3,
        healthMartCustomerInfo: {
          healthMartCustName: 'John Doe',
          healthMartCustAddress: '123 Main Street',
          healthMartCustCity: 'Cityville',
          healthMartCustState: 'State',
          healthMartCustZipcode: '12345',
          healthMartCustCountry: 'Country',
        },
      };
  
      const order = orderService.createOrder(orderPayload);
  
      expect(order).toHaveProperty('orderId');
      expect(order.product).toEqual(orderPayload.healthMartProduct);
      expect(order.quantity).toEqual(orderPayload.healthMartQuantity);
    });
  
    // Add more tests for getOrder and getAllOrders
  });
  