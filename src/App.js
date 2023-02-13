import logo from './logo.svg';
import './App.css';
import * as Customer from './components/Customer'; // 함수

const customer = {
  'name':'유재현',
  'birthday':'19941230',
  'gender':'남성',
  'job':'개발자',
}

function App() {
  return (
   <Customer.Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}      
   />
  );
}

export default App;
