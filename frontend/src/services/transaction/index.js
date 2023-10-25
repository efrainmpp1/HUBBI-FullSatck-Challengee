import * as mock from "./mock";
import * as integration from "./integration";

const useMock = !!import.meta.env.VITE_USE_MOCK;

export const getAllTransactions = useMock
  ? mock.getAllTransactions
  : integration.getAllTransactions;

export const getAllTransactionTypes = useMock
  ? mock.getAllTransactionTypes
  : integration.getAllTransactionTypes;
