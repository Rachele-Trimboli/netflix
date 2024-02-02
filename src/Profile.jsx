const Profile = function () {
  return (
    <div className="container bg-black" id="profileContainer">
      <div className="row">
        <div className="col-12 border-bottom border-light-gray">
          <h1 className="text-white display-2 fw-medium">Edit Profile</h1>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-2">
          <img src="..//assets/10.png" alt="avatar" />
        </div>
        <div className="col-7 fs-5 text-white border-bottom border-light-gray pb-3">
          <p className="bg-secondary p-2">Strive Student</p>
          <p>Lenguage:</p>
          <div className="dropdown">
            <button
              className="btn btn-bg-dark border border-white dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Scegli Lingua
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item">Italiano</li>
              <li className="dropdown-item">Inglese</li>
              <li className="dropdown-item">Spagnolo</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row justify-content-center text-start">
        <div className="col-2"></div>
        <div className="col-7">
          <p className="text-light-gray fw-medium fs-4">Maturity Settings:</p>
          <button type="button" className="btn btn-button-gray">
            ALL MATURITY RATINGS
          </button>
          <p className="text-white fs-6 mt-3">
            Show titles of
            <span className="fw-medium">all maturity ratings</span>for this
            profile
          </p>
          <button type="button" className="btn btn-outline-secondary">
            EDIT
          </button>
        </div>
      </div>
      <div className="row justify-content-center text-start second">
        <div className="col-2"></div>
        <div className="col-7 pb-3 border-bottom-light-gray mt-3">
          <p className="text-light-gray fw-medium fs-4">Autoplay Controls</p>
          <div className="form-check">
            <input
              className="form-check-input bg-bg-dark border border-light-gray fs-4"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Autoplay to next episode
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input bg-bg-dark border border-light-gray fs-4"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label className="form-check-label" for="flexCheckChecked">
              Autoplay previous
            </label>
          </div>
        </div>
      </div>
      <div className="row justify-content-center text-start">
        <div className="col-12 mt-4 border-top border-light-gray pt-5">
          <button
            className="btn btn-primary bg-white text-dark fw-medium border border-light-gray btn-lg"
            type="submit"
          >
            SAVE
          </button>
          <button type="button" className="btn btn-outline-secondary btn-lg">
            CANCEL
          </button>
          <button type="button" className="btn btn-outline-secondary btn-lg">
            DELETE PROFILE
          </button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
