import { useState } from "react"

import { Navigate, useNavigate } from "react-router-dom"

export default function LoginScreen({Verify ,setVerify }) {
    const [user, setuser] = useState({
        Email: "",
        Password: ""
    })


    const navigate = useNavigate()

    const LoginHandler = () => {
        if(!user.Email){
           return alert("Required Email")
        }
        if(!user.Password){
            return alert("Required Password")
        }

        const Data = JSON.parse(localStorage.getItem("R_User"))

        const Result = Data.find((e)=> e.Email === user.Email)

        if(Result){
            localStorage.setItem("L_User", JSON.stringify(user))
            navigate("/")
            setVerify(true)
          
        }else{
            return alert("Email not matched")
        }

        
    }
  
    if(Verify){
        return <Navigate to="/"/>
    }
    return <>
        <div className=" Login_page iconn m-0 p-0 ">
            <div className="text-center ">
                <h3 className="pt-5 blinking"> Login your ID</h3>

            </div>
            <div className="row m-0 p-0 ">
                <div style={{ height: "25.6rem" }}>
                    <div className="d-flex login justify-content-center align-itmes-center pt-3 p-5 ">
                        <div className="card1 shadow-lg rounded bg-info" style={{ width: "20rem" }}>
                            <center>
                                <div className="px-4 py-2 ">
                                    <div className="text-dark icon-grop">
                                        <div ><i style={{ fontSize: "38px" }} className="fa-brands fa-apple  "></i></div>                                     </div>
                                </div>


                            </center>
                            <div className="card-body " style={{ background: "#fff !important" }}>

                                <div className="row">
                                    <div className="col-12 mb-2">

                                        <input onChange={(e) => { setuser({ ...user, Email: e.target.value }) }} type="email" className="form-control form-control-lg" placeholder="email" />

                                    </div>

                                    <div className="col-12 mb-2 ">
                                        <input onChange={(e) => { setuser({ ...user, Password: e.target.value }) }}  type="password"  className="form-control form-control-lg" placeholder="password" />
                                    </div>

                                    <div className="col-12 mb-2">
                                        <center>
                                            <button onClick={LoginHandler} className="btn w-25 btn-warning rounded-pill loginbtn">SignIn</button>
                                            <br></br>

                                            <span className="text-dark"> or </span>
                                            <br />
                                            <div className="text-center">
                                                <p>Create New Account ? <a href="/register">Register</a></p>
                                            </div>
                                        </center>
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