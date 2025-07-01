import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react';

function Layout({ children,}) {

  return (
    <div className="flex flex-col min-h-screen">
       <Navbar/>
      <main className="flex-grow dark:bg-[#111826]">
        {children}
      </main>
      </div>

  )
}

export default Layout