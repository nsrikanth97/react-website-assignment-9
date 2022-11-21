import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { singUp } from "./loginAPI";
import { useStateContext } from "../context/StateContext";
import { ErrorMessage } from "../model/error.model";
import { Response, Status } from "../model/response.model";
import { User } from "../model/user.model";

function SignUp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const { setLoginState,setFullName } = useStateContext();
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [forceUpdate, setForceUpdate] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    console.log("Sign up component re rendering");
  })

  let validElementsL = 0;
  validElementsL = document.querySelectorAll(".is-valid").length;
  const btnClassName = `btn btn-primary ${
    validElementsL !== 5 ? " disabled" : " "
  }`;
  const emailValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    let val = event.target.value;

    let emailRegex = /^[a-z0-9.]{1,64}@northeastern.edu$/;

    let emailLabel = document.querySelector(
      ".invalid-feedback.emailId"
    ) as HTMLDivElement | null;
    let alertWindow = document.querySelector(
      ".alert.alert-danger.alert-dismissible.fade"
    ) as HTMLDivElement;
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
      if(validElementsL  === 4){
        alertWindow.classList.remove("show");
        alertWindow.classList.add("hide");
      }
    }
    setEmail(val);
  };
  const passwordValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    let val = event.target.value;
    let passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    let passwordLabel = document.querySelector(
      ".invalid-feedback.password"
    ) as HTMLDivElement | null;

    if (val.trim().length == 0 && null != passwordLabel) {
      passwordLabel.innerHTML = "Password is a required field";
      passwordLabel.style.display = "block";
      event.target.classList.remove("is-valid");
      event.target.classList.add("is-invalid");
    } else if (!val.trim().match(passwordRegex) && null != passwordLabel) {
      passwordLabel.innerHTML =
        "Password must contain atleast one lower case aplhabet, upper case aplhabet, numeric and a special character. Length must be between 8 to 20 characters.";
      passwordLabel.style.display = "block";
      event.target.classList.remove("is-valid");
      event.target.classList.add("is-invalid");
    } else if (null != passwordLabel) {
      event.target.classList.remove("is-invalid");
      passwordLabel.style.display = "none";
      event.target.classList.add("is-valid");
    }
    setPassword(val);
  };
  var confrimPasswordValidation = function (
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    let val = event.target.value;
    let passwordLabel = document.querySelector(
      ".invalid-feedback.confirmPassword"
    ) as HTMLDivElement | null;
    if (val.trim().length == 0 && null != passwordLabel) {
      passwordLabel.innerHTML = "Confirm password is a required field";
      passwordLabel.style.display = "block";
      event.target.classList.remove("is-valid");
      event.target.classList.add("is-invalid");
    } else if (val !== password && null != passwordLabel) {
      passwordLabel.innerHTML = "Confirm password and password should match";
      passwordLabel.style.display = "block";
      event.target.classList.remove("is-valid");
      event.target.classList.add("is-invalid");
    } else if (passwordLabel != null) {
      passwordLabel.style.display = "none";
      event.target.classList.remove("is-invalid");
      event.target.classList.add("is-valid");
    }
    setConfirmPassword(val);
  };

  var userNameValidation = function (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) {
    let val = event.target.value;
    let userNameLabel;
    if (type === "First") {
      userNameLabel = document.querySelector(
        ".invalid-feedback.firstName"
      ) as HTMLDivElement | null;
    } else {
      userNameLabel = document.querySelector(
        ".invalid-feedback.lastName"
      ) as HTMLDivElement | null;
    }
    let userName = /^[a-zA-Z]{6,30}$/;
    if (val.trim().length == 0 && userNameLabel != null) {
      userNameLabel.innerHTML = "Username is a required field";
      userNameLabel.style.display = "block";
      event.target.classList.remove("is-valid");
      event.target.classList.add("is-invalid");
    } else if (!val.trim().match(userName) && userNameLabel != null) {
      userNameLabel.innerHTML =
        "Username has to be a alphabets and has be between 6 to 30 characters";
      userNameLabel.style.display = "block";
      event.target.classList.remove("is-valid");
      event.target.classList.add("is-invalid");
    } else if (null != userNameLabel) {
      userNameLabel.style.display = "none";
      event.target.classList.remove("is-invalid");
      event.target.classList.add("is-valid");
    }
    if (type === "First") setFirstName(val);
    else setLastName(val);
  };

  const clearFields = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setConfirmPassword("");
    setPassword("");
  };

  const submitFunction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let invalidElementsL = document.querySelectorAll(".is-invalid").length;
    let alertWindow = document.querySelector(
      ".alert.alert-danger.alert-dismissible.fade"
    ) as HTMLDivElement;
    let alertWindowSpan = document.querySelector(
      ".alert-windown-login-page"
    ) as HTMLSpanElement;
    if (invalidElementsL > 0) {
      alertWindow.classList.remove("hide");
      alertWindow.classList.add("show");
      return;
    } else {
      alertWindow.classList.remove("show");
      alertWindow.classList.add("hide");
    }
    const newUser: User = {
      name: {
        first: firstName,
        last: lastName,
      },
      email: email,
      password: password,
    };
    const response: Response = await singUp(newUser);
    if (response.status === Status.SUCCESS) {
      clearFields();
      setLoginState(true);
      setFullName(response.data.fullName);
      navigate('/');
    } else if(response.message === 'UNIQUE_EMAIL_ERROR'){
      alertWindowSpan.innerHTML = ErrorMessage.UNIQUE_EMAIL_ERROR;
      let emailInput = document.querySelector(
        "#emailId"
      ) as HTMLDivElement;
      emailInput.classList.remove("is-valid");
      emailInput.classList.add("is-invalid");
      alertWindow.classList.remove("hide");
      alertWindow.classList.add("show");
      setForceUpdate(!forceUpdate);
      return;
    }else{
      alertWindowSpan.innerHTML = response.message;
      alertWindow.classList.remove("hide");
      alertWindow.classList.add("show");
      return;
    }
    document.querySelectorAll(".is-valid").forEach((el) => {
      el.classList.remove("is-valid");
    });
  };

  return (
    <div className="container">
      <form noValidate onSubmit={(e) => submitFunction(e)} className="container">
        <h2 className="m-3 text-center">Create account </h2>
        <div
            className="row alert alert-danger alert-dismissible fade hide signup"
            role="alert"
          >
            <span className="alert-windown-signup-page"></span>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
        </div>
        <div className="form-group row mb-3">
          <label
            htmlFor="emailId"
            className="col-sm-4 col-form-label text-sm-end"
          >
            Email*:{" "}
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              value={email}
              className="form-control "
              id="emailId"
              placeholder="email@example.com"
              required
              onChange={(e) => {
                emailValidation(e);
              }}
            />
          </div>
          <div className="invalid-feedback emailId offset-sm-4"></div>
        </div>
        <div className="form-group row mb-3">
          <label
            htmlFor="firstName"
            className="col-sm-4 col-form-label text-sm-end"
          >
            First name*:{" "}
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Mark"
              value={firstName}
              required
              onChange={(e) => {
                userNameValidation(e, "First");
              }}
            />
          </div>
          <div className="invalid-feedback firstName offset-sm-4"></div>
        </div>
        <div className="form-group row mb-3">
          <label
            htmlFor="lastName"
            className="col-sm-4 col-form-label text-sm-end"
          >
            Last name*:{" "}
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Mark"
              value={lastName}
              required
              onChange={(e) => {
                userNameValidation(e, "Last");
              }}
            />
          </div>
          <div className="invalid-feedback lastName offset-sm-4"></div>
        </div>
        <div className="form-group row mb-3">
          <label
            htmlFor="inputPassword"
            className="col-sm-4 col-form-label text-sm-end"
          >
            Password*:{" "}
          </label>
          <div className="col-sm-4">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                passwordValidation(e);
              }}
              required
            />
          </div>
          <div className="invalid-feedback password"></div>
        </div>
        <div className="form-group row mb-3">
          <label
            htmlFor="confirmPassword"
            className="col-sm-4 col-form-label text-sm-end"
          >
            Confirm password*:{" "}
          </label>
          <div className="col-sm-4">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => {
                confrimPasswordValidation(e);
              }}
              required
            />
          </div>
          <div className="invalid-feedback confirmPassword offset-sm-4"></div>
        </div>
        <div className="text-center">
          <button className={btnClassName} type="submit">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
