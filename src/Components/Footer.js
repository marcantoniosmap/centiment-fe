import { Link } from "react-router-dom";

export default function Footer(){
    return(
      <>
      <div className="w-100" style={{backgroundColor:'#282E39'}}>
          <div className="container py-5">
          <div className="row">
              <div className="col-lg-3 d-none d-lg-block px-2">
                <img className="img-fluid" src="../img/centimentLogo-white.png"/>
              </div>

              <div className="col-lg-2 col-12 ps-5">
                <div className="d-flex flex-column h-100 text-white">
                  <h6 className="font-weight-bold pb-2">USEFUL LINKS</h6>
                  <Link className="py-2"to="/">Home</Link>
                  <Link className="py-2"to="/aboutus">About Us</Link>
                  <Link className="py-2"to="/dashboard">Dashboard</Link>
                  <Link className="py-2"to="/login">Login</Link>

                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-block text-white">
                <h6 className="font-weight-bold pb-1">ABOUT CENTIMENT</h6>
                <p className="opacity-75" style={{fontSize:'0.9rem',textAlign:'justify'}}>Centiment is a web application that integrate market sentiment formed in the Twitter to the existing price chart used in technical analysis. It manufacture a continuous data pipeline present it as a modern graph and charts through widgets.</p>
                <Link className="" to='/aboutus'>{'LEARN MORE >'}</Link>
              </div>
           
              <div className="col-lg-3 col-12 ps-5 pt-lg-0 pt-5">
                <div className="d-flex flex-column h-100 text-white">
                  <h6 className="font-weight-bold pb-2">CONTACTS</h6>
                  <div className="mb-2">
                    <p className="opacity-75 mb-0" style={{fontSize:'0.8rem'}}>Email</p>
                    <a className="py-2" href="mailto:marcantoniosmap@gmail.com">marcantoniosmap@gmail.com</a>
                  </div>
                  <div className="mb-2">
                    <p className="opacity-75 mb-0" style={{fontSize:'0.8rem'}}>Instagram</p>
                    <a className="py-2" href="https://instagram.com/marcantoniosmap">marcantoniosmap</a>
                  </div>
                  <div className="mb-2">
                    <p className="opacity-75 mb-0" style={{fontSize:'0.8rem'}}>Github</p>
                    <a className="py-2" href="https://github.com/marcantoniosmap/centiment-fe">This Project</a>
                  </div>

               
                 

                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div style={{backgroundColor:'#0C0F14'}}>
            <div className="justify-content-center align-items-center d-flex text-white py-2">
              <span  style={{fontSize:'0.9rem',opacity:'50%', fontStyle:'italic'}}>Project Done for Binus International ©2022</span>
            </div>
        </div>
        </>
    )
}