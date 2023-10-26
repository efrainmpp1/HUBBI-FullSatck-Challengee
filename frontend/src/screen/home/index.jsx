import ActionAreaCard from "../../components/ActionAreaCard";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Hubbi Challenge</h1>
      <div className="div-card">
        <div className="card">
          <ActionAreaCard
            tittle="Cadastrar Transações"
            onClick={() => navigate("/massive_transaction_registration")}
          >
            Essa sessão é usada para Cadastrar Transações no Banco de Dados
            massivamente
          </ActionAreaCard>
        </div>
        <div className="card">
          <ActionAreaCard
            tittle="Lista de Transações"
            onClick={() => navigate("/transaction_history")}
          >
            Essa sessão é usada para Listar as Transações já realizadas
          </ActionAreaCard>
        </div>
      </div>
    </>
  );
}

export default Home;
