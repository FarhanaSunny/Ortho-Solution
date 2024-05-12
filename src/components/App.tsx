import Greeter from './Greeter';
import FormTextFields from './TextField';
import FormSelectDropDown from './SelectDropDown';
import LoginPage from './pages/LoginPage';
import DataInputPage from './pages/DataInputPage';
import {Routes , Route} from 'react-router-dom'

function App() {

  return (
    // @ts-ignore
        <Routes>
          <Route path= '/' element={ <LoginPage />}/>
          <Route path='input' element={<DataInputPage />} />
        </Routes>
    
    
  )
}

export default App