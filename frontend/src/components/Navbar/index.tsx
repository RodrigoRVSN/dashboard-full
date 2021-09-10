import sunnaIcon from "assets/images/sunnaIcon.png";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom shadow-sm">
        <div className="container">
          <nav className="my-2 my-md-0 mr-md-3">
            <Link to="/">
              <img src={sunnaIcon} alt="Sunna logo" width="80" />
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
