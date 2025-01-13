import React from 'react'
import Navbar from './Navbar'

const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
       <Navbar/>
{children}

    </div>
  )
}



export default MainLayout