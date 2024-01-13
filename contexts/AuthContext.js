import React,{createContext ,useContext,useState ,useEffect} from 'react';


const AuthContext=createContext()

export function useAuth(){
    const auth =useContext(AuthContext)
    return auth
}



export function AuthProvider({children}){
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const login=()=>{
        localStorage.setItem('token','user')
        setIsLoggedIn(true)
      }
    
      const logout=()=>{
        localStorage.removeItem('token')
        setIsLoggedIn(false)
      }

      useEffect(()=>{
        const token=localStorage.getItem('token')
        setIsLoggedIn(!!token)
      },[])
    
   
    return <AuthContext.Provider value={{
        isLoggedIn,
        login,
        logout
    }}>{children}</AuthContext.Provider>
}