import { Link } from "react-router-dom";
import imgDashboard from "assets/images/imgDashboard.svg";

export function Home() {
  return (
    <>
      <div className="jumbotron__cta">
        <div className="jumbotron__cta__text">
          <h2>RVendas</h2>
          <h3>
            Analise o desempenho das suas vendas por diferentes perspectivas.
          </h3>
          <Link className="btn btn-primary btn-lg" to="/dashboard">
            Acessar dashboard
          </Link>
        </div>
        <img src={imgDashboard} alt="dashboard" />
      </div>
    </>
  );
}
