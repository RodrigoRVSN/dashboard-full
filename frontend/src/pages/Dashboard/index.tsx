import { BarChart } from "components/BarChart";
import { DataTable } from "components/DataTable";
import { DonutChart } from "components/DonutChart";

export function Dashboard() {
  return (
    <>
      <div className="bg-container">
        <div className="container center">
          <h1 className="secondary-text py-3">Dashboard de Vendas</h1>
          <div className="row px-3">
            <div className="col-sm-6">
              <h5 className="text-center secondary-text">
                Taxa de sucesso (%){" "}
              </h5>
              <BarChart />
            </div>
            <div className="col-sm-6">
              <h5 className="text-center secondary-text">Todas as vendas </h5>
              <DonutChart />
            </div>
          </div>
          <div className="py-3">
            <h2 className="secondary-text">Todas as vendas</h2>
          </div>
          <DataTable />
        </div>
      </div>
    </>
  );
}
