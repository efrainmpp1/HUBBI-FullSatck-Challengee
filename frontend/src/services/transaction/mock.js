import all_transactions from "../../tests/mocks/transaction/index.json";
import all_transaction_types from "../../tests/mocks/transaction/transaction_types.json";

export async function getAllTransactionTypes() {
  return { data: all_transaction_types };
}

export async function getAllTransactions() {
  return { data: all_transactions };
}

export async function massiveRegisterTransactions(list_transactions) {
  return { data: list_transactions };
}
