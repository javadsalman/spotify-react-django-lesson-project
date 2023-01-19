import React from 'react'
import Actionbar from '../containers/Actionbar/Actionbar'
import Navbar from '../containers/Navbar/Navbar'
import Sidebar from '../containers/Sidebar/Sidebar'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className='flex h-screen w-screen'>
        <Sidebar />
        <div className='bg-stone-800 w-full overflow-auto pt-20 pb-32'>
            <Navbar />
            {props.children}
        </div>
        <Actionbar />
    </div>
  )
}

export default Layout