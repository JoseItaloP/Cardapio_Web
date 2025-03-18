import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import CartProvider from '../context/CartContext'

export default function Main({children}: {children: ReactNode}) {
  
  return (
    <>
    <CartProvider>
      <Header />
        <main className='MainPage'>
          {children}
        </main>

    </CartProvider>
      <Footer />
    </>
  )
}
