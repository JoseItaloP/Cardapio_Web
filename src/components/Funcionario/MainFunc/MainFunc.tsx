import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function MainFunc({children}: {children: ReactNode}) {
  
  return (
    <>
    
      <Header />
        <main className='MainPage'>
          {children}
        </main>
      <Footer />
    </>
  )
}
