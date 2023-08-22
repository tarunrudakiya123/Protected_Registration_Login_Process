import { Navigate, useNavigate } from "react-router-dom"

export default function Home({ Verify }) {
  const navigate = useNavigate()



  if (!Verify) {
    return <Navigate to="/login" />
  }

  return <>
    <header className='w-100 bg-dark px-2 d-flex align-items-center justify-content-between py-2 '>
      <div className="logo">
        {/* <h4 className='fw-bold text-light '>Apple</h4> */}
        <img height="40px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/1757px-Apple_Computer_Logo_rainbow.svg.png" alt="props"></img>
      </div>
      <div className="icon d-flex gap-4 align-items-center">

        <button type="button" className="btn  m-0 p-1">
          <i className="fa-brands fa-opencart fs-5 position-relative">
          </i>
        </button>
        <button

          onClick={() => {
            localStorage.removeItem("L_User")
            window.location.reload()
          }}

          className='btn btn-warning'>
          {

            "SignOut"
          }

        </button>
      </div>
    </header>


    <div className="container">
      <img height="500px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/1757px-Apple_Computer_Logo_rainbow.svg.png" alt="props"></img>

    </div>

  </>
}