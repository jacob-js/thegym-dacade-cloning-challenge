import React from 'react'
import Navbar from './components/Navbar'

function Layout({children}) {
  return (
    <div>
        <Navbar />
        <div className="min-h-screen pt-44 overflow-hidden bg-white">
            {children}
        </div>
    </div>
  )
}

export default Layout