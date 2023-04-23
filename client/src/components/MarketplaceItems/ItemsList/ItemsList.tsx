import React from 'react'

const testData = [
  {
    user: {
      img: '/logo-variant2.png',
      name: 'YO'
    },
    itemName: 'Test1',
    itemPrice: '10',
    currency: '$'
  },
  {
    user: {
      img: '/logo-variant2.png',
      name: 'LOL'
    },
    itemName: 'Test8',
    itemPrice: '10',
    currency: '$'
  },
  {
    user: {
      img: '/logo-variant1.png',
      name: 'hahaha'
    },
    itemName: 'Test2mb',
    itemPrice: '1220',
    currency: '$'
  }
]

const ItemsList = () => {
  
  return (
    <div className='overflow-x-auto w-full py-5'>
      <h1 className='py-2 font-bold'>Current offers</h1>
      <table className='table w-full'>
        <thead className=''>
          <th>User</th>
          <th>Item Name</th>
          <th>Item Price</th>
          <th></th>
        </thead>
        <tbody>
          {
            testData.map((item, index) => (
              <tr>
                <td className='flex items-center gap-2'>
                  <img 
                    className='w-[35px] rounded-[30px] bg-purple-400'
                    src={item?.user?.img}
                  />
                  {item?.user?.name}
                </td>
                <td>{item?.itemName}</td>
                <td>{item?.itemPrice + item?.currency}</td>
                <td>
                  <button className='rounded-[25px] bg-purple-400'>
                    Details
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ItemsList