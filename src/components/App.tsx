import Greeter from './Greeter';
import FormTextFields from './TextField';
import FormSelectDropDown from './SelectDropDown';
import LoginPage from './pages/LoginPage';
import DataInputPage from './pages/DataInputPage';

function App() {
  const name = 'Bob'

  return (
    // @ts-ignore
    <div>
      {/* <Greeter name={name}/>
      <FormTextFields label='1st Text field' defaultValue='default value1'/>
      <FormTextFields label='2nd Text field' defaultValue='default value 2'/> */}
      <LoginPage />
      <DataInputPage />

    </div>
  )
}

export default App