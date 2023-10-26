import { useState } from "react";
import FileUploader from "../../components/Upload";
import Button from "../../components/Button";
import Notification from "../../components/Notification";
import { massiveRegisterTransactions } from "../../services/transaction";
import "./style.css";

function MassiveTransactionRegistration() {
  const [transactions, setTransactions] = useState([]);
  const [openNotification, setOpenNotification] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState({
    severity: "info",
    message: null,
  });

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
    setTransactions(data);
  };

  const handleSubmit = async (data) => {
    try {
      const response = await massiveRegisterTransactions(data);
      if (response.status == 201) {
        setNotificationStatus({
          severity: "success",
          message: "As transações foram Cadastradas com Sucesso",
        });
      }
      setOpenNotification(true);
      setTransactions([]);
    } catch (error) {
      setNotificationStatus({
        severity: "error",
        message: "Houve um erro ao tentar cadastrar as transações",
      });
      setOpenNotification(true);
      setTransactions([]);
    }
  };

  return (
    <>
      <h1>Cadastro Massivo de Transações</h1>
      <div>
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
      <Notification
        open={openNotification}
        setOpen={setOpenNotification}
        severity={notificationStatus.severity}
      >
        {notificationStatus.message}
      </Notification>
    </>
  );
}

export default MassiveTransactionRegistration;
