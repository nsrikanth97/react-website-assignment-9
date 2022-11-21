import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function JobCard(item: {
  position: string;
  location: string;
  zipcode: string;
  owner: string;
  state: string;
  city: string;
  key: number;
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="card ">
        <div className="card-body container">
          <div className="row align-items-center">
            <div className="col-9">
              <h3 className="card-title text-start">{item.position}</h3>
              <p className="card-text text-secondary text-start">
                {item.location + ", " + item.city + ", " + item.state}
              </p>
              <p className="card-text text-secondary text-start">
                {item.owner}
              </p>
            </div>
            <div className="col-3 align-middle">
              <button className="btn btn-primary" onClick={handleShow}>
                Apply Today
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Applying for {item.position} postion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group m-1">
              <label htmlFor="inputEmail1">Email address*:</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <label htmlFor="inlineRadioOptions" className="px-3 m-1">
              Gender* :
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="Male"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="Female"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="other"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Other
              </label>
            </div>
            <div className="form-group m-1">
              <label htmlFor="inputFullName">Full name*:</label>
              <input
                type="text"
                className="form-control"
                id="inputFullName"
                aria-describedby="nameHelp"
                placeholder="first last"
              />
              <small id="nameHelp" className="form-text text-muted">
                Please enter name according to the goverenment id
              </small>
            </div>
            <div className="form-group m-1">
              <label htmlFor="mobileNumber">Mobile number*:</label>
              <input
                type="number"
                className="form-control"
                id="mobileNumber"
                placeholder="857-832-1121"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputQualification">State</label>
              <select id="inputQualification" defaultValue={'graduate'} className="form-control">
                <option value = 'Graduate'>Graduate</option>
                <option value = 'undergraduate'>Undergraduate</option>
                <option value = '+2'>+2</option>
              </select>
            </div>
            <div className="form-group m-3">
              <label htmlFor="exampleFormControlFile1">Resume:</label>
              <input
                type="file"
                className="form-control form-control-file"
                id="formControlFile1"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
          <button className="btn btn-primary" onClick={handleClose}>
            Submit Application
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default JobCard;
