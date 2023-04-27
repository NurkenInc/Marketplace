import React from 'react'

const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,12,3,5,154,54,5,44,5,4,4,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,12,3,5,154,54,5,44,5,4,4,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,12,3,5,154,54,5,44,5,4,4,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,12,3,5,154,54,5,44,5,4,4,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,12,3,5,154,54,5,44,5,4,4,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,12,3,5,154,54,5,44,5,4,4]

const Inventory = () => {
  return (
    <div>
      <h2 className='text-[24px] md:text-[35px] font-bold px-4'>Inventory</h2>
      <div className='inventory-items flex flex-wrap w-[100%] gap-1 bg-purple-200 p-3 rounded-[3px] h-[30vh] overflow-y-scroll'>
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
  )
}

export default Inventory