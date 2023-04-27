import React from 'react'
import { UserButton, useUser } from '@clerk/clerk-react'

import { Statistics, TransactionsHistory, Inventory } from '../components'

const Hero = () => {
  const { user } = useUser()

  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-2 p-4'>
        <UserButton />
        <h1 className='text-[30px]'>
          {user?.firstName}
        </h1>
      </div>
    </div>
  )
}

const Profile = () => {
  return (
    <div className='profile'>
      <Hero />
      <div className='md:p-4 p-0 flex-col gap-8'>
        <Inventory />
        <TransactionsHistory />
      </div>
      <div>
        <Statistics />
      </div>
    </div>
  )
}

export default Profile
// items list where you can add items to your profile