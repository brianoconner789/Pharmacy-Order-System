# Pharmacy Order System

This project implements a Pharmacy Order System where customers can place orders with different pharmacies. Focus on future implementation of more pharmacies is given.

## Project Structure

- **src/app/App.ts**: Entry point of the application, sets up Express server and defines API endpoints for the HealthMart pharmacy.

- **src/pharmacy/HealthMartIntegration.ts**: Implementation of the HealthMart pharmacy integration.

- **src/pharmacy/PharmacyIntegration.ts**: Interface for pharmacy integrations.

- **src/order/OrderService.ts**: Service for handling customer orders, interacting with pharmacy integrations.

- **tests/**: Unit tests for the project.

## Note 

Given time constraint - This implementation only implements 1 pharmacy out of 3 pharmacies given in the problem statement but, I have attached a process below to implement future pharacies which stays the same. 

Similarly, I have implemented endpoints in App.ts, which can be abstracted out to multiple files when we write more endpoints. I did not overengineer the application at this point but, it is possible and we can structure the code nicely when the need arises for easy reusability and scalability. 

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Run the Server**:
   ```bash
   npm start
   ```
3. **Run the Tests**:
   ```bash
   npm test
   ```
4. After the server runs, you can test with HealthMart Order payload given through Insomnia or Postman and the order will be created. You'll be able to read the orders and order by Id as well for that pharmacy. 

Sample Payload : 
```
{
"healthMartProduct": "Painkiller",
"healthMartQuantity": 3,
"healthMartCustomerInfo": {
    "healthMartCustName": "John Doe",
    "healthMartCustAddress": "123 Main Street",
    "healthMartCustCity": "Cityville",
    "healthMartCustState": "State",
    "healthMartCustZipcode": "12345",
    "healthMartCustCountry": "Country"
    }
}
```

## Adding New Pharmacies

To add a new pharmacy to the system, follow these steps:

1. Create a new PharmacyIntegration Class:

In the `src/pharmacy/` directory, create a new TypeScript file for the new pharmacy integration (e.g., `NewPharmacyIntegration.ts`).

Implement the PharmacyIntegration interface in this file.

2. Define Pharmacy-Specific Properties:

If the new pharmacy requires additional properties in its order payload, define them in the `PharmacyOrderPayload` interface in the `src/pharmacy/PharmacyIntegration.ts` file.

Modify the PharmacyOrder interface accordingly.

3. Implement NewPharmacyIntegration Class:

Implement the new pharmacy integration by extending the `PharmacyIntegration` interface in the newly created file (e.g., `NewPharmacyIntegration.ts`).

4. Update App.ts:

In src/app/App.ts, import the new pharmacy integration class (e.g., import { NewPharmacyIntegration } from '../pharmacy/NewPharmacyIntegration';).

Create an instance of the new pharmacy integration and update the `orderService` to use this instance.

5. Update API Endpoints: 

If the new pharmacy introduces new API endpoints, define them in src/app/App.ts accordingly.

