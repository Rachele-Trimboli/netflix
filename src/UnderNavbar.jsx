const UnderNavbar = function () {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <h2 className="mb-4 text-white">TV Shows</h2>
        <div className="btn-group" role="group">
          <div className="dropdown ms-4 mt-1">
            <button
              type="button"
              className="btn btn-secondary btn-sm dropdown-toggle rounded-0 bg-black"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Genres
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item">Comedy</li>
              <li className="dropdown-item">Drama</li>
              <li className="dropdown-item">Thriller</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-evenly" style={{ width: "100px" }}>
        <i className="bi bi-grid icons text-white"></i>
        <i className="bi bi-grid-3x3 icons text-white"></i>
      </div>
    </div>
  );
};
export default UnderNavbar;
