import React, { createContext,  useState } from 'react'


export const UserContext= createContext({
    user:{},
    userHandler:()=>{},
    tokenHandler:()=>{},
    parseDataHandler:()=>{},
    fetchedData:()=>{}
})

export const UserContextProvider = ({children}) => {
    const [user,setUser]= useState({})
    const[ course,setCourse] = useState({})


    const parseDataHandler=()=>{
       const user = localStorage.getItem("user")
            const userlogin= JSON.parse(user)
        return userlogin
    
    }
    const userHandler= (data)=>{
        localStorage.setItem("user",JSON.stringify(data))
        
    }
    const tokenHandler=(token)=>{
        localStorage.setItem("access_token",token)
    }
    const fetchedData =({data})=>{
        setCourse(data)
       
    
    }

const userData= {
    user,userHandler,tokenHandler,parseDataHandler,fetchedData
}


  return (
    <UserContext.Provider  value={userData}>
        {children}

    </UserContext.Provider>

  )
}

