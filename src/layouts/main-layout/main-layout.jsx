import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header} from "../main-layout/header"
import {Footer} from "../main-layout/footer"
export const MainLayout= () => {
  return (
    <div>
      <header>
            <Header/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}
