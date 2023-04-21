import React from 'react'
import { 
  Container,
  Box,
  Button,
} from '@chakra-ui/react'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  
  return (
    <Container maxW='container.xl'>
      <Box>
        <SignedOut>
          <Button
            colorScheme='purple'
            onClick={() => navigate('/sign-in')}
          >
            Log In
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Box>
    </Container>
  )
}

export default Navbar