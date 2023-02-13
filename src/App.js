import logo from './logo.svg';
import './App.css';
import * as Customer from './components/Customer'; // 함수

const customers = [
  {
  'id':1,
  'image': 'https://placeimg.com/64/64/any',
  'name':'유재현',
  'birthday':'19941230',
  'gender':'남성',
  'job':'개발자',
},
{
  'id':2,
  'image': 'https://placeimg.com/82/82/1',
  'name':'김하림',
  'birthday':'19970910',
  'gender':'여성',
  'job':'운동강사',
},
{
  'id':3,
  'image': 'https://placeimg.com/42/42/2',
  'name':'이동혁',
  'birthday':'19940403',
  'gender':'남성',
  'job':'서버관리자',
}
]

function App() {
  return (
   <div>
   {
    customers.map(c => {
      return (
          <Customer.Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
      );
    })
   }
   </div>
  );
}

export default App;
