import React from 'react'
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

import { Logotype, ToggleModeButton } from '../../components'

const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useUser()
  console.log(user)

  const handleLogin = () => navigate('/sign-in')

  return (
    <div className='navbar bg-purple-400 rounded-[20px] justify-between items-center max-w-full transition-colors duration-500'>
      <Logotype />
      <div className='flex gap-4'>
        <ToggleModeButton />
        <SignedIn>
          <button className='px-0 py-0 border-none rounded-[50%] overflow-hidden'>
            <img 
              className='w-[40px]'
              src={user?.profileImageUrl} 
            />
          </button>
        </SignedIn>
        <SignedOut>
          <button
            className='rounded-[25px]'
            onClick={handleLogin}
          >
            Log In
          </button>
        </SignedOut>
      </div>
    </div>
  )
}

export default Navbar