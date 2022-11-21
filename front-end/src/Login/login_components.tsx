import { useState } from "react";
import { login } from "./loginAPI";
import { Response, Status } from "../model/response.model";
import { useStateContext } from "../context/StateContext";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../model/error.model";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLoginState, setFullName ,setSubscribe} = useStateContext();
  const [forceUpdate, setForceUpdate] = useState(false);

  const navigate = useNavigate();
  const emailValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    let val = event.target.value;

    let emailRegex = /^[a-z0-9.]{1,64}@northeastern.edu$/;

    let emailLabel = document.querySelector(
      ".invalid-feedback.emailIdL"
    ) as HTMLDivElement | null;
    if (val.trim().length == 0 && null != emailLabel) {
      emailLabel.innerHTML = "Email is a required field";
      emailLabel.style.display = "block";
      event.target.classList.remove("is-valid");
      event.target.classList.add("is-invalid");
    } else if (!val.trim().match(emailRegex) && null != emailLabel) {
      emailLabel.innerHTML =
        "Please enter your college email id with northeastern domain.";
      emailLabel.style.display = "block";
      event.target.classList.remove("is-valid");
      event.target.classList.add("is-invalid");
    } else if (null != emailLabel) {
      event.target.classList.remove("is-invalid");
      emailLabel.style.display = "none";
      event.target.classList.add("is-valid");
    }
    setEmail(val);
  };
  const loginFunction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let response: Response = await login({ email, password });
    console.log(response);
    let alertWindow = document.querySelector(
      ".alert.alert-danger.alert-dismissible.fade.login"
    ) as HTMLDivElement;
    let alertWindowSpan = document.querySelector(
        ".alert-windown-login-page"
      ) as HTMLSpanElement;
    if (response.status === Status.SUCCESS) {
      setEmail("");
      setPassword("")
      setLoginState(true);
      setFullName(response.data.fullName);
      alertWindow.classList.remove("show");
      alertWindow.classList.add("hide");
      setSubscribe(false);
      navigate("/");
      
    } else if(response.message === 'PASSOWORD_IS_NOT_CORRECT') {
        alertWindowSpan.innerHTML = ErrorMessage.PASSOWORD_IS_NOT_CORRECT;
        alertWindow.classList.remove("hide");
        setPassword("")
        alertWindow.classList.add("show");
        setForceUpdate(!forceUpdate);
        return;
    }else if(response.message ==='USER_WITH_EMAIL_NOT_FOUND'){
        alertWindowSpan.innerHTML = ErrorMessage.USER_WITH_EMAIL_NOT_FOUND;
        alertWindow.classList.remove("hide");
        alertWindow.classList.add("show");
        setForceUpdate(!forceUpdate);
        return;
    }else{
            setEmail("");
            setPassword("");
            alertWindowSpan.innerHTML = response.message;
            alertWindow.classList.remove("hide");
            alertWindow.classList.add("show");
            setForceUpdate(!forceUpdate);
    }
    document.querySelectorAll(".is-valid").forEach((el) => {
        el.classList.remove("is-valid");
      });
  };
  return (
    <>
      <form className="container"
        noValidate
        onSubmit={(e) => {
          loginFunction(e);
        }}
      >
        <h2 className="m-3 text-center">Enter your login details</h2>
        <div
            className="alert alert-danger alert-dismissible fade hide login"
            role="alert"
          >
            <span className="alert-windown-login-page"></span>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
        </div>
        <div className="form-group row mb-3">
          <label
            htmlFor="emailIdL"
            className="col-sm-4 col-form-label text-sm-end"
          >
            Email*:{" "}
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              value={email}
              className="form-control "
              id="emailIdL"
              placeholder="email@example.com"
              required
              onChange={(e) => {
                emailValidation(e);
              }}
            />
          </div>
          <div className="invalid-feedback emailIdL offset-sm-4"></div>
        </div>
        <div className="form-group row mb-3">
          <label
            htmlFor="inputPasswordL"
            className="col-sm-4 col-form-label text-sm-end"
          >
            Password*:{" "}
          </label>
          <div className="col-sm-4">
            <input
              type="password"
              className="form-control"
              id="inputPasswordL"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3 text-center">
          <span>
            Don't have account. <a href="">Create now</a>
          </span>
        </div>
        <div className="text-center">
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
