import React from 'react'
import { UserButton, useUser } from '@clerk/clerk-react'
import { CiUser } from 'react-icons/ci'
import { FiDollarSign } from 'react-icons/fi'
import { FaSitemap, FaBoxOpen, FaBox } from 'react-icons/fa'

const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,12,3,5,154,54,5,44,5,4,4,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,12,3,5,154,54,5,44,5,4,4,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,12,3,5,154,54,5,44,5,4,4,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,12,3,5,154,54,5,44,5,4,4,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,12,3,5,154,54,5,44,5,4,4,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,12,3,5,154,54,5,44,5,4,4]

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
      <div className='p-4 flex gap-8'>
        <div>
          <h2 className='text-[24px] font-bold'>Inventory</h2>
          <div className='flex flex-wrap w-[100%] gap-1 bg-purple-200 p-3 rounded-[3px] h-[30vh] overflow-y-scroll'>
            {
              items.map((item, index) => (
                <div key={item + index.toString()} className='relative border-violet-400 border-[3px] rounded-[5px] group hover:border-gray-100 transition-all duration-500'>
                  <img src="/tree.png" className='w-[35px] h-[35px] object-cover rounded-[3px]' />
                  <div className='absolute z-10 text-white font-bold text-[10px] top-2.5 pl-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500'>Details</div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='text-left'>
          <h2 className='text-[24px] font-bold'>Transactions History</h2>
            <table className='table'>
              <thead>
                <tr>
                  <th>Sold/Bought</th>
                  <th>To</th>
                  <th>Price</th>
                  <th>Item</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>
        </div>
      </div>
      <div>
        <h2 className='px-4 font-bold text-[35px]'>Statistics</h2>
        <div className="stats shadow">
          <div>
            <div>
              <div className="stat">
                <div className="stat-figure text-primary">
                  <FiDollarSign size='3rem' />
                </div>
                <div className="stat-title">Money amount</div>
                <div className="stat-value text-primary">25.6K</div>
              </div>
              
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FaBoxOpen size='3rem' />
                </div>
                <div className="stat-title">Transactions</div>
                <div className="stat-value text-secondary">178</div>
              </div>
            </div>
          </div>
          <div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaSitemap size='3rem' />
              </div>
              <div className="stat-value">Sold</div>
              <div className="stat-title">78</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaSitemap size='3rem' />
              </div>
              <div className="stat-value">Bought</div>
              <div className="stat-title">100</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
// items list where you can add items to your profile