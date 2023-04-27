import { 
  Navbar,
  ItemsList,
  Transactions
} from '../components'

const Home = () => {
  return (
    <div className='h-[100vh]'>
      <ItemsList />
      <Transactions />
    </div>
  )
}

export default Home