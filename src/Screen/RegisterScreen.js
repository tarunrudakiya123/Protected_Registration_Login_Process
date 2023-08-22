import { useState } from "react"
import {Navigate, useNavigate } from "react-router-dom"

export default function RegisterScreen({Verify, setVerify }) {

    const [user, setuser] = useState({
        Name: "",
        Email: "",
        Password: ""
    })
    const navigate = useNavigate()

// --------------------------------------------------------------------------------------------------
   
    const RegisterHanler = () => {
        const NameError = document.getElementById("msg1")
        const EmailError = document.getElementById("msg2")
        const PasswordError = document.getElementById("msg3")


        if(!user.Name){
            NameError.style.color ="Red"
            return NameError.innerText="Enter Your Name"

        }else{
             NameError.innerText=""
        }

        if(!user.Email){
            EmailError.style.color ="Red"
            return EmailError.innerText="Enter Your Email"
        }else{
            EmailError.innerText=""
        }

        if(!user.Password){
            PasswordError.style.color ="Red"
            return PasswordError.innerText="Enter Your Password"
        }else{
            PasswordError.innerText=""
        }
// --------------------------------------------------------------------------------------------------

        const Data = JSON.parse(localStorage.getItem("R_User")|| "[]")

        const Result = Data.find((x)=> x.Email === user.Email)  

        if(Result){
            alert("Email already Used")
        }else{
            localStorage.setItem("L_User", JSON.stringify(user))
            setVerify(true)
            navigate("/")
        }


        Data.push(user)

        localStorage.setItem("R_User", JSON.stringify(Data))
        
    }
    if(Verify){
        return <Navigate to="/"/>
    }
// --------------------------------------------------------------------------------------------------

    return <>
        <div className=" register_page fluid ">
            <div className="layer ">
                <div className="row m-0">
                    <div style={{ height: "30.7rem" }}>
                        <div className="d-flex login justify-content-center align-itmes-center  mt-2">
                            <div className=" Register " style={{ width: "21rem" }}>
                                <center>
                                    <div >
                                        <div className="text-white">
                                            <i
                                                style={{ fontSize: "38px" }}
                                                className="fa-brands fa-apple  "
                                            ></i>
                                        </div>
                                    </div>
                                </center>
                                <div className="" style={{ background: "#fff !important" }}>
                                    <div className="row m-0">
                                        <div className="col-12 text-light">
                                            <label>Name</label>
                                            <input onChange={(e) => {setuser({...user, Name: e.target.value})}} type="text"
                                            className="form-control form-control-lg" placeholder="Name" />
                                            <div id="msg1"></div>
                                        </div>



                                        <div className="col-12  text-light">
                                            <label>Email</label>
                                            <input onChange={(e) => {setuser({...user, Email: e.target.value})}} type="email"
                                            className="form-control form-control-lg" placeholder="Email" />
                                            <div id="msg2"></div>


                                        </div>

                                        <div className="col-12 mb-1 text-light">
                                            <label>Password</label>
                                            <input onChange={(e) => {setuser({...user, Password: e.target.value})}} type="password"
                                             className="form-control form-control-lg" placeholder="Password" />
                                            <div id="msg3"></div>

                                        </div>

                                        <div className="col-12 mb-3 mt-2 text-light">
                                            <center>
                                                <button
                                                    onClick={RegisterHanler}
                                                    className="btn w-100 btn-warning rounded-pill"
                                                >
                                                    Create an Account
                                                </button>

                                                <p className="text-center text-muted mt-2 mb-0">Have already an account? <a href="/login"
                                                    className="fw-bold text-body"><u>Login here</u></a></p>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>
}