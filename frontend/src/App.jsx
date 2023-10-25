import { useState } from "react";
import FileUploader from "./components/Upload";
import Button from "./components/Button";
import { massiveRegisterTransactions } from "./services/transaction";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleFileUpload = (fileContent) => {
    // Divide o conteúdo do arquivo em linhas
    const lines = fileContent.split("\n");

    // Cria uma lista de objetos com as chaves especificadas, ignorando as linhas em branco
    const data = lines
      .map((line) => ({
        transaction_type_id: parseInt(line[0]),
        date: line.slice(1, 26).trim(),
        product_description: line.slice(26, 56).trim(),
        amount_in_cents: parseInt(line.slice(56, 66).trim()),
        seller_name: line.slice(66, 86).trim(),
      }))
      .filter(
        (item) =>
          item.transaction_type_id ||
          item.date ||
          item.product_description ||
          item.amount_in_cents ||
          item.seller_name
      );

    console.log(data);
    setTransactions(data);
  };

  const handleSubmit = async (data) => {
    try {
      await massiveRegisterTransactions(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Hubbi Challenge</h1>
      <div className="card">
        <FileUploader onFileUpload={handleFileUpload} />
        {transactions.length > 0 ? (
          <Button
            onClick={() => handleSubmit(transactions)}
            label="Enviar Transações"
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
