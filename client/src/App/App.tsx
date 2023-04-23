import React from 'react'
import { 
  ClerkProvider,
  SignIn,
  SignUp
} from '@clerk/clerk-react'
import { dark } from '@clerk/themes'
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom'

import { Home } from '../pages'

import './App.css'

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY

const ClerkProviderWithRoutes = () => {
  const navigate = useNavigate()

  return (
    <ClerkProvider 
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route 
          path='/sign-in/*'
          element={
            <SignIn 
              routing='path' 
              path='/sign-in' 
              redirectUrl='/'
              signUpUrl='/sign-up'
            />
          }
        />
        <Route 
          path='/sign-up/*'
          element={
            <SignUp 
              routing='path' 
              path='/sign-up' 
              redirectUrl={'/'}
              signInUrl='/sign-in' 
            />
          }
        />
      </Routes>
    </ClerkProvider>
  )
}

const App = () => {
  return (
    <Router>
      <ClerkProviderWithRoutes />
    </Router>
  )
}

export default App