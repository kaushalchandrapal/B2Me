import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import HomeScreen from './Screens/HomeScreen'
const App = () => {
  return (
    <>
      <Header/>
      <main className='py-3'>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;
