import ActionAreaCard from "../../components/ActionAreaCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Hubbi Challenge</h1>
      <div>
        <ActionAreaCard
          tittle="Cadastrar Transações"
          onClick={() => navigate("/massive_transaction_registration")}
        >
          Essa sessão é usada para Cadastrar Transações no Banco de Dados
          massivamente
        </ActionAreaCard>
        <ActionAreaCard
          tittle="Lista de Transações"
          onClick={() => navigate("/transaction_history")}
        >
          Essa sessão é usada para Listar as Transações já realizadas
        </ActionAreaCard>
      </div>
    </>
  );
}

export default Home;
