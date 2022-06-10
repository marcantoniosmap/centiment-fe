import { Button } from "bootstrap";
import { Offcanvas } from "bootstrap";
import { useState } from "react";
import { CloseButton, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useAuth } from "../AuthContext";

export default function NavbarCustom(){

    const {user,isAuthenticated,logout}= useAuth()
    const history = useNavigate()

    const [showSetting,setShowSetting]=useState(false)
    const location = window.location.pathname.split('/')[1]
    const navigationList=[
      {
        to:'/home',
        text:'Home'
      },
      {
        to:'/aboutus',
        text:'About Us'
      },
      {
        to:'/dashboard',
        text:'Dashboard'
      },
      {
        to:'/alerts',
        text:'Alerts'
      },
    ]

    function handleLogout(){
      // history('/home')
      logout()
    }

    return(
      <>
      <Navbar className="mainNavbar" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home"><img src="/img/CentimentLogoHorizontal.png" height={50}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="align-items-center">
              {
               navigationList.map((singleItem)=>(
                 <Nav.Link key={singleItem.to} className={`px-4 ${('/'+location)===singleItem.to && 'navActive'}`} href={singleItem.to}>{singleItem.text}</Nav.Link>
               )) 
              }
              {
                isAuthenticated ? 
                <div>
                 <div 
                      onClick={()=>setShowSetting(true)}
                      style={{backgroundColor:user.profileColor}} 
                      className="mx-4 tweeterAvatar d-flex justify-content-center align-items-center font-weight-bold text-white" >
                    {user.name ?user.name[0].toUpperCase():'M'}
                  </div>
                  <div className={`settingpopup ${showSetting ? 'helo':'d-none'}`} >
                    <div className="d-flex flex-column justify-content-between h-100">
                      <div className="settingpopupchild py-2" onClick={''}>
                          <span className="px-3">Profile Setting</span>
                      </div>
                      <div className="settingpopupchild py-2" onClick={handleLogout}>
                          <span className="px-3">Logout</span>
                      </div>
                      
                    </div>
                    <div className="settingpopupclose" onClick={()=>setShowSetting(false)}>
                        <CloseButton/>
                    </div>
                </div>
                </div>
                 :
                <Nav.Item>
              <Nav.Link href="/login"><btn className="btn btn-primary">Log In</btn></Nav.Link>
            </Nav.Item>

              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
}