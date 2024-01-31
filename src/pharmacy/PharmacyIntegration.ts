// PharmacyIntegration.ts
export interface PharmacyOrderPayload {
    [key: string]: any;
  }
  
  export interface PharmacyOrder {
    orderId: string;
    product: string;
    quantity: number;
    // Add pharmacy-specific properties
  }
  
  export interface PharmacyIntegration {
    createOrder(payload: PharmacyOrderPayload): PharmacyOrder;
    getOrders(): PharmacyOrder[];
    getOrder(orderId: string): PharmacyOrder | null;
  }
  