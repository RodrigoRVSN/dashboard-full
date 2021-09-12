import { SalePage } from "types/sale";

type Props = {
  page: SalePage;
  onPageChange: Function;
};

export const Pagination = ({ page, onPageChange }: Props) => {
  return (
    <div className="d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${page.first ? "disabled" : ""}`}>
            <button
              onClick={() => onPageChange(page.number - 1)}
              className="page-link btn btn-primary btn-lg"
            >
              Anterior
            </button>
          </li>
          <li className="page-item disabled">
            <span className="page-link btn-primary">{page.number + 1}</span>
          </li>
          <li className={`page-item ${page.last ? "disabled" : ""}`}>
            <button
              onClick={() => onPageChange(page.number + 1)}
              className="page-link btn btn-primary btn-lg"
            >
              Próxima
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
