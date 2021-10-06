import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import { Container } from '@chakra-ui/layout'
import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'

import "@fontsource/roboto-mono"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.md" mt="10">
        <Header/>
        <Form/>
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
