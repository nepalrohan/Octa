import React from 'react'
import Navbar from './Navbar'

const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex flex-col h-screen'>
       <Navbar/>
 


        {children}
       

    </div>
  )
}



export default MainLayout