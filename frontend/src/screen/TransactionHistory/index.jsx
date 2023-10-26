import { useState, useEffect } from "react";
import { getAllTransactions } from "../../services/transaction";
import SpanningTable from "./components/SpanningTable";

export default function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllTransactions();
        console.log(response.data);
        setTransactions(response.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <SpanningTable
        rows={transactions.transactions}
        total_amount={transactions.total_amount_in_cents}
      />
    </>
  );
}
