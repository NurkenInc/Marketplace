import React from 'react'
import { useNavigate } from 'react-router-dom'

const testData = [
  {
    user: {
      img: '/logo-variant2.png',
      name: 'YO'
    },
    id: 'id',
    itemName: 'Test1',
    itemPrice: '10',
    currency: '$'
  },
  {
    user: {
      img: '/logo-variant2.png',
      name: 'LOL'
    },
    id: 'id2',
    itemName: 'Test8',
    itemPrice: '10',
    currency: '$'
  },
  {
    user: {
      img: '/logo-variant1.png',
      name: 'hahaha'
    },
    id: 'id3',
    itemName: 'Test2mb',
    itemPrice: '1220',
    currency: '$'
  },
  {
    user: {
      img: '/logo-variant1.png',
      name: 'hahaha'
    },
    id: 'id3',
    itemName: 'Test2mb',
    itemPrice: '1220',
    currency: '$'
  },
  {
    user: {
      img: '/logo-variant1.png',
      name: 'hahaha'
    },
    id: 'id3',
    itemName: 'Test2mb',
    itemPrice: '1220',
    currency: '$'
  },
  {
    user: {
      img: '/logo-variant1.png',
      name: 'hahaha'
    },
    id: 'id3',
    itemName: 'Test2mb',
    itemPrice: '1220',
    currency: '$'
  },
  {
    user: {
      img: '/logo-variant1.png',
      name: 'hahaha'
    },
    id: 'id3',
    itemName: 'Test2mb',
    itemPrice: '1220',
    currency: '$'
  },
]

const ItemsList = () => {
  const navigate = useNavigate()

  const handleDetails = () => {
    navigate('item/details/:id')
  }

  return (
    <div>
      <h1 className='py-2 font-bold'>Current offers</h1>
      <div className='overflow-x-auto w-full py-5 overflow-y-scroll h-[260px]'>
        <table className='custom-table w-full'>
          <thead className='bg-gray-200 font-mono text-left'>
            <tr>
              <th className='py-4 px-8'>User</th>
              <th>Item Name</th>
              <th>Item Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              testData.map((item, index) => (
                <tr key={item + index.toString()} className='bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-colors duration-500'>
                  <td className='flex items-center gap-2 py-4 px-8'>
                    <img
                      className='w-[35px] rounded-[30px] bg-purple-400'
                      src={item?.user?.img}
                    />
                    {item?.user?.name}
                  </td>
                  <td>{item?.itemName}</td>
                  <td>{item?.itemPrice + item?.currency}</td>
                  <td>
                    <button 
                      className='rounded-[25px] bg-purple-400 transition-colors duration-400' 
                      onClick={handleDetails}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ItemsList