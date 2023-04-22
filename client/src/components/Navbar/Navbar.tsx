import React from 'react'
import { 
  Container,
  Box,
  Button,
} from '@chakra-ui/react'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

import { Logotype } from '../../components'

const Navbar = () => {
  const navigate = useNavigate()
  
  return (
    <Box
      as='nav'
      w={'100%'}
      position='fixed'
      py={3}
      zIndex={1}
    >
      <Container
        display={'flex'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'space-between'}
        maxW={'container.lg'}
      >
        <Box>
          <Logotype />
        </Box>
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
    </Box>
  )
}

export default Navbar