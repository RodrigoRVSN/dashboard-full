import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "components/Pagination";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/formatLocalDate";
import { BASE_URL } from "utils/requests";

export function DataTable() {
  const [activePage, setActivePage] = useState(0);
  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  const changePage = (index: number) => {
    setActivePage(index);
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
      .then((res) => {
        setPage(res.data);
      });
  }, [activePage]);

  return (
    <div className="container__page">
      <Pagination page={page} onPageChange={changePage} />
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Data</th>
              <th>Vendedor</th>
              <th>Clientes visitados</th>
              <th>Negócios fechados</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {page.content?.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                  <td>{item.seller.name}</td>
                  <td>{item.visited}</td>
                  <td>{item.deals}</td>
                  <td>{item.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
