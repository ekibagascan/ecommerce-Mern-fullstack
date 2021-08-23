import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <main className='py-3'>
          <Container>
            <HomeScreen />
          </Container>
        </main>
        <Footer />
      </>
    </BrowserRouter>
  )
}

export default App
