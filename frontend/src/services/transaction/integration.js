import { api } from "../api";

export async function getAllTransactionTypes() {
  return api.get("/transaction_types");
}

export async function getAllTransactions() {
  return api.get("/transaction");
}

export async function massiveRegisterTransactions(list_transactions) {
  const object_transactions = { transactions: list_transactions };
  console.log(object_transactions);
  return api.post("/massive_register_transactions/", object_transactions);
}
