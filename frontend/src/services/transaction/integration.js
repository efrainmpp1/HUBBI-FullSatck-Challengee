import { api } from "../api";

export async function getAllTransactionTypes() {
  return api.get("/transaction_types");
}

export async function getAllTransactions() {
  return api.get("/transaction");
}

export async function massiveRegisterTransactions(list_transactions) {
  return api.post("/massive_register_transactions", list_transactions);
}
