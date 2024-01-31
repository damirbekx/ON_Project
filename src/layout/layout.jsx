import React from 'react'
import { Header } from './header'
import { Outlet } from 'react-router-dom'
import { Footer } from './footer'

export const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
