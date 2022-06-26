import jwtDecode from "jwt-decode"
import React, {useContext, useState, useEffect} from "react"
const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){

    const domain = 'https://rsvp.marcantonioapp.com'
    // const domain = 'http://localhost:8000'
    const [user,setUser]=useState({})
    const [isAuthenticated,setIsAuthenticated]=useState(false)
    const [loginModal,setLoginModal]=useState(false)

    function setLoginModalFunc(param){
      setLoginModal(param)
  }
   

    async function login(object){
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: object.email, password: object.password }),
          };
          try {
            const response = await fetch(
              `${domain}/user/login`,
              requestOptions
            );
            if (response.ok) {
              setIsAuthenticated(true)
              const data = await response.json();
              const userObject={ 
                login: true,
                token: data.token,
                id: data.id,
                name:data.name,
                email:data.email,
                profileColor:data.profileColor
              }
              setUser(userObject)
                localStorage.setItem(
                "login",
                JSON.stringify(userObject)
              );
              return ({data:'ok',msg:''})
      
            } 
          } catch (err) {
            console.log(err.message)
            return({data:'err',msg:err});
          }
    }

    async function register(object){
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: object.email, name : object.name, password: object.password }),
          };
          try {
            const response = await fetch(
              `${domain}/user/register`,
              requestOptions
            );
              const data = await response.json();
              return (data)
          
          }catch (err) {
              return({data:'err'});
            }
    }

    async function updateProfile(object){
      const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_id:user.id,name: object.name, profileColor:object.profileColor }),
        };
        try {
          const response = await fetch(
            `${domain}/user/update`,
            requestOptions
          );
            const data = await response.json();
            var temp = {
              login:true,
              token:user.token,
              id:user.id,
              name:object.name,
              email:user.email,
              profileColor:object.profileColor,
            }
            setUser(temp)
            localStorage.setItem(
              "login",
              JSON.stringify(temp)
            );
            return ({status:'ok'})
        
        }catch (err) {
            return({data:'err'});
          }
  }

  async function updatePassword(object){
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id:user.id,oldPassword:object.oldPassword,newPassword:object.newPassword }),
      };
      try {
        const response = await fetch(
          `${domain}/user/updatePass`,
          requestOptions
        );
          const data = await response.json();
          console.log(data)
          return ({status:'ok'})
      
      }catch (err) {
          return({data:'err'});
        }
}
    async function resetPass(object){
      const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: object.password, user_id : object.user_id, validate: object.validate }),
        };
        try {
          const response = await fetch(
            `${domain}/user/resetPassword`,
            requestOptions
          );
          const data = await response.json();
            return (data)
        
        }catch (err) {
            return({data:'err'});
          }
  }
  async function sendEmailResetPass(object){
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: object.email }),
    };
    try {

      const response = await fetch(
        `${domain}/user/sendForgetPass`,
        requestOptions
      );
        const data = await response.json();
        console.log(data)
        return (data)
    
    }catch (err) {
        return({data:'err'});
      }
  }
    

    function logout(){
        setUser(false)
        setIsAuthenticated(false)
        localStorage.removeItem("login")
    }


    useEffect(()=>{
        const tempToken = JSON.parse(localStorage.getItem("login"))
        if (localStorage.getItem("login")){
            if (jwtDecode(tempToken.token).exp< Math.floor(Date.now()/1000)){
              setIsAuthenticated(false)
              setUser({})
            }
            else{
              setUser({
                  login:true,
                  token:tempToken.token,
                  id:tempToken.id,
                  name:tempToken.name,
                  email:tempToken.email,
                  profileColor:tempToken.profileColor,
              })
              setIsAuthenticated(true)
            }
        }else {
            setUser({})
            setIsAuthenticated(false)
        }
      


    },[])
    
    function setAuth(param){
      setIsAuthenticated(param)
    }

    function getUser(){
      return user
    }

    const value ={
        user,
        getUser,
        setUser,
        setAuth,
        isAuthenticated,
        sendEmailResetPass,
        setLoginModalFunc,
        updatePassword,
        loginModal,
        updateProfile,
        login,
        resetPass,
        register,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}