import React, {useContext, useState, useEffect} from "react"
const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){

    const domain = 'https://rsvp.marcantonioapp.com'
    const [user,setUser]=useState({})
    const [isAuthenticated,setIsAuthenticated]=useState(false)
   

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
      
            } else {
              const data = await response.json();
              return({data:'err',msg:data});
            }
          } catch (err) {
            return({data:'err',msg:'err'});
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
            if (response.ok) {
              const data = await response.json();
              return (true)
      
            } else {
              const data = await response.json();
              return(false);
            }
          } catch (err) {
            return(false);
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
            setUser({
                login:true,
                token:tempToken.token,
                id:tempToken.id,
                name:tempToken.name,
                email:tempToken.email,
                profileColor:tempToken.profileColor,
            })
            setIsAuthenticated(true)
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
        login,
        register,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}