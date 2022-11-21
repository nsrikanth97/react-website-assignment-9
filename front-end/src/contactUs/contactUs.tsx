import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/StateContext";


export function ContactUs(){
    const {loginState} = useStateContext();
    let navigate = useNavigate();
    useEffect(()=> {
        if(!loginState)
        navigate("/login");

    })
    return (
        <div  className="flex-fill container">
            <div className="row">
                <div className="form-container col-md-6 p-3">
                    <h1 className="text-center">Feedback</h1>
                    <form className="mx-auto" onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        <div className="mb-3">
                            <label htmlFor="formControlInput1" className="form-label">Full name</label>
                            <input type="fullName" className="form-control" id="formControlInput1" placeholder="First Last"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formControlInput2" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="formControlInput2" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formControlInput3" className="form-label">Phone number</label>
                            <input type="phoneNumber" className="form-control" id="formControlInput3" placeholder="857-812-3425"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={5} placeholder="Your message"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary mb-3">Send</button>
                        </div>
                    </form>
                </div>
                <div className="form-container col-md-6 p-3">
                    <div>
                        <h1 className="font-weight-bold">Head Office, <br/>156 Allston Green,<br/>USA, 02134</h1>
                    </div>
                    <div className="mt-3">
                        <span>If you’d like to join the team at Pho, check out our jobs page  </span>
                        <Link to="/jobs">here</Link>
                    </div>
                    <div className="mt-3">
                        <span>For any enquiries please email </span>
                        <a href="mailto:name@example.com">name@example.com</a>
                    </div>
                    <div className="mt-3">
                        <h1>Get in touch</h1>
                        <p>
                            If you have an enquiry about booking a table, 
                            allergens in our food or dietary requirements,
                            please check out our <Link to="/">FAQ's</Link>
                            
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}