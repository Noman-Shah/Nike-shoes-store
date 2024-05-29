import React from 'react'
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components'
import { footerAPI, heroapi, highlight, popularsales, sneaker, story, toprateslaes } from './data/data'

const App = () => {
  return (
    <>
      <main className='flex flex-col gap-[80px]'>
        <Navbar />
        <Cart />
        <Hero heroapi= {heroapi} />
        <Sales  endpoint = {popularsales} ifExists/>
        <FlexContent endpoint = {highlight} ifExists/>
        <Sales  endpoint = {toprateslaes}/>
        <FlexContent endpoint = {sneaker}/>
        <Stories story = {story}/> 
        <Footer footerAPI={footerAPI} />
        
      </main>
    </>
  )
}

export default App