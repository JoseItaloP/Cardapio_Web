import {  ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Main({children}: {children: ReactNode}) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
