import SignUp from "./signup_component";
import Login from "./login_components";
export function LoginPage (){

    return(
    <div className="flex-fill">
    <ul className="nav nav-tabs container m-auto mt-3" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link "
            id="singup-tab"
            data-bs-toggle="tab"
            data-bs-target="#singup"
            type="button"
            role="tab"
            aria-controls="singup"
            aria-selected="true"
          >
            Sign Up
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="login-tab"
            data-bs-toggle="tab"
            data-bs-target="#login"
            type="button"
            role="tab"
            aria-controls="login"
            aria-selected="false"
          >
            Login
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade "
          id="singup"
          role="tabpanel"
          aria-labelledby="singup-tab"
        >
          <SignUp></SignUp>
        </div>
        <div
          className="tab-pane fade show active"
          id="login"
          role="tabpanel"
          aria-labelledby="login-tab"
        >
          <Login></Login>
        </div>
      </div>
    </div>)
}