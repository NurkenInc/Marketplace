import { CiUser } from 'react-icons/ci'
import { FiDollarSign } from 'react-icons/fi'
import { FaSitemap, FaBoxOpen, FaBox } from 'react-icons/fa'

const Statistics = () => {
  return (
    <div>
      <h2 className='px-4 font-bold text-[24px] md:text-[35px]'>Statistics</h2>
      <div className="stats shadow">
        <div>
          <div>
            <div className="stat">
              <div className="stat-figure text-[#9333ea]">
                <FiDollarSign size='3rem' />
              </div>
              <div className="stat-title">Money amount</div>
              <div className="stat-value text-[#9333ea]">25.6K</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-[#db2777]">
                <FaBoxOpen size='3rem' />
              </div>
              <div className="stat-title">Transactions</div>
              <div className="stat-value text-[#db2777]">178</div>
            </div>
          </div>
        </div>
        <div>
          <div className="stat">
            <div className="stat-figure text-[#db2777]">
              <FaSitemap size='3rem' />
            </div>
            <div className="stat-value">Sold</div>
            <div className="stat-title text-[25px]">78</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-[#9333ea]">
              <FaSitemap size='3rem' />
            </div>
            <div className="stat-value">Bought</div>
            <div className="stat-title text-[25px]">100</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics