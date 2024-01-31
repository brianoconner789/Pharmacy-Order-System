// src/order/OrderService.ts
import { PharmacyIntegration, PharmacyOrderPayload } from "../pharmacy/PharmacyIntegration";

export class OrderService {
  constructor(private pharmacyIntegration: PharmacyIntegration) {}

  createOrder(payload: PharmacyOrderPayload): any {
    try {
      return this.pharmacyIntegration.createOrder(payload);
    } catch (error) {
      console.error(`Error while creating an order: ${(error as Error).message}`);
      throw new Error("Failed to create order");
    }
  }

  getOrder(orderId: string): any {
    try {
      return this.pharmacyIntegration.getOrder(orderId);
    } catch (error) {
      console.error(`Error while getting an order by ID: ${(error as Error).message}`);
      throw new Error("Failed to get order");
    }
  }

  getAllOrders(): any[] {
    try {
      return this.pharmacyIntegration.getOrders();
    } catch (error) {
      console.error(`Error getting all orders: ${(error as Error).message}`);
      throw new Error("Failed to get all orders");
    }
  }
}
