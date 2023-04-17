import React from 'react'
import { 
  Container,
  Box,
  Button,
} from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Container maxW='container.xl'>
      <Box>
        <Button 
          colorScheme='purple'
          onClick={() => loginWithRedirect()}
        >
          Log In
        </Button>
      </Box>
    </Container>
  )
}

export default Navbar