// src/pharmacy/HealthMartIntegration.ts
import { PharmacyIntegration, PharmacyOrder, PharmacyOrderPayload } from './PharmacyIntegration';

export class HealthMartIntegration implements PharmacyIntegration {
  private orders: PharmacyOrder[] = [];

  createOrder(payload: PharmacyOrderPayload): PharmacyOrder {
    const order: PharmacyOrder = {
      orderId: `HM${this.orders.length + 1}`,
      product: payload.healthMartProduct,
      quantity: payload.healthMartQuantity,
      // Add pharmacy-specific properties
    };
    this.orders.push(order);
    return order;
  }

  getOrders(): PharmacyOrder[] {
    return this.orders;
  }

  getOrder(orderId: string): PharmacyOrder | null {
    const order = this.orders.find((o) => o.orderId === orderId);
    return order ? order : null;
  }
}
