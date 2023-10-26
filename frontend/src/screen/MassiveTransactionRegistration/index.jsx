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

    let struct_is_ok = true;

    const data = lines
      .map((line) => {
        if ((line.length > 1) & (line.length < 86)) {
          struct_is_ok = false;
          return null;
        }
        return {
          transaction_type_id: parseInt(line.slice(0, 1)),
          date: line.slice(1, 26).trim(),
          product_description: line.slice(26, 56).trim(),
          amount_in_cents: parseInt(line.slice(56, 66).trim()),
          seller_name: line.slice(66, 86).trim(),
        };
      })
      .filter(Boolean); // Remove null entries

    if (!struct_is_ok) {
      // Check if the line doesn't have enough characters for the expected structure
      setNotificationStatus({
        severity: "error",
        message:
          "Estrutura do arquivo inválida. Favor revisar arquivo de entrada para seguir o padrão estabelecido.",
      });
      setOpenNotification(true);
    } else {
      setTransactions(data);
    }
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
        {transactions.length > 0 ? (
          <Button
            onClick={() => handleSubmit(transactions)}
            label="Enviar Transações"
          />
        ) : (
          <FileUploader onFileUpload={handleFileUpload} />
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
