import LoginPage from './pages/LoginPage';
import DataInputPage from './pages/DataInputPage';
import ReportPage from './pages/ReportPage';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';


function App() {

  const theme = createTheme({
    palette: {
      background: {
        default: '#f3e8ff',
        paper: '#f3e8ff'
      }
    }
  })

  /**
   * / -> <Dashboard> (if logged in, else go to /login)
   * /login -> <Login>
   * /admin -> <AdminDashboard>
   * /:user -> <UserPage>
   */
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage/>
    },
    {
      path: 'input',
      element: <DataInputPage />
    },
    {
      path: 'report',
      element: <ReportPage />
    }

  ])

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App