import LoginPage from './pages/LoginPage';
import DataInputPage from './pages/DataInputPage';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage/>
    },
    {
      path: 'input',
      element: <DataInputPage />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App