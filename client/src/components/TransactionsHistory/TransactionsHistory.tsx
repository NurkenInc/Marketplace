import React from 'react'  

const TransactionsHistory = () => {
  return (
    <div className='text-left'>
      <h2 className='text-[24px] md:text-[35px] font-bold px-4'>Transactions History</h2>
        <table className='table w-full'>
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
  )
}

export default TransactionsHistory