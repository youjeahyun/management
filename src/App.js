import logo from './logo.svg';
import './App.css';
import * as Customer from './components/Customer'; // 함수
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { styled } from '@mui/material/styles';
import Paper from '@material-ui/core/Paper';

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
  'image': 'https://placeimg.com/64/64/1',
  'name':'김하림',
  'birthday':'19970910',
  'gender':'여성',
  'job':'운동강사',
},
{
  'id':3,
  'image': 'https://placeimg.com/64/64/2',
  'name':'이동혁',
  'birthday':'19940403',
  'gender':'남성',
  'job':'서버관리자',
}
]

function App() {
  return (
   <Paper className='root'>
      <Table className='table'>     
        <TableHead  >
          <TableRow>         
             <TableCell>번호</TableCell>
             <TableCell>이미지</TableCell>
             <TableCell>이름</TableCell>
             <TableCell>생년월일</TableCell>
             <TableCell>성별</TableCell>
             <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
        </TableBody>
    </Table>
   </Paper>
  );
}

export default App;
