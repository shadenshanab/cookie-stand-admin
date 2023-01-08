'use client';


import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ThemeWrapper from './contexts/theme'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <ThemeWrapper>
      <body>
        <header>
          <Header />
        </header>
        <main className='dark:bg-[#BD8C61]'
>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
        </body>
        </ThemeWrapper>

    </html>
  )
}