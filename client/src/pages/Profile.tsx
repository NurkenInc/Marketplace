import React from 'react'
import { UserButton, useUser } from '@clerk/clerk-react'
import { CiUser } from 'react-icons/ci'

const Profile = () => {
  const { user } = useUser()

  return (
    <div>
      <div className={`flex justify-between`}>
        <div className='flex items-center gap-2 p-4'>
          {/* <img src={user?.profileImageUrl} className='rounded-[50%] w-[3rem]' /> */}
          <UserButton />
          <h1 className='text-[30px]'>
            {user?.firstName}
          </h1>
        </div>
        <div className='p-4'>
        </div>
      </div>
      <div>
        <h2>Items</h2>
        <button>Add item</button>
      </div>
    </div>
  )
}

export default Profile
// items list where you can add items to your profile