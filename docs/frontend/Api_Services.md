# API Services Documentation

This document explains the structure of the services used in the API project. The services are organized into subfolders, each serving a specific purpose. The `api` folder contains the Axios configuration used to connect to the API server, while other subfolders contain integration and mock services.

## Table of Contents

- [API Configuration](#api-configuration)
- [Integration Services](#integration-services)
- [Mock Services](#mock-services)

## API Configuration

The `api` folder handles the Axios configuration and exports the API instance that can be used in other service files.

### `api.js`

- **api:** This is an Axios instance configured to communicate with the API server at `http://localhost:8000`.

## Integration Services

The integration services located in each subfolder provide functions that make actual requests to the API.

### transaction: `integration.js`

- **getAllTransactionTypes:**
  - Inputs: None
  - Returns: A Promise that resolves to the transaction types fetched from the API.

- **getAllTransactions:**
  - Inputs: None
  - Returns: A Promise that resolves to all transactions fetched from the API.

- **massiveRegisterTransactions:**
  - Inputs:
    - `list_transactions` (Array): An array of transaction data to be registered.
  - Returns: A Promise that sends a POST request to the API to register the provided transactions and resolves with the response.

## Mock Services

The mock services are used for testing or development purposes, simulating API responses without actual network requests.

### transaction: `mock.js`

- **getAllTransactionTypes:**
  - Inputs: None
  - Returns: An object simulating the API response containing transaction types.

- **getAllTransactions:**
  - Inputs: None
  - Returns: An object simulating the API response containing all transactions.

- **massiveRegisterTransactions:**
  - Inputs:
    - `list_transactions` (Array): An array of transaction data.
  - Returns: An object simulating a response for a massive registration operation.

## Usage

In your application code, you can switch between using the real API integration and mock services based on the presence of the `VITE_USE_MOCK` environment variable.

Example of usage in an index.js file:

```javascript
import * as mock from "./mock";
import * as integration from "./integration";

const useMock = !!import.meta.env.VITE_USE_MOCK;

export const getAllTransactions = useMock
  ? mock.getAllTransactions
  : integration.getAllTransactions;

export const getAllTransactionTypes = useMock
  ? mock.getAllTransactionTypes
  : integration.getAllTransactionTypes;

export const massiveRegisterTransactions = useMock
  ? mock.massiveRegisterTransactions
  : integration.massiveRegisterTransactions;
```