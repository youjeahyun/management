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
import React, { useState, useEffect } from 'react';


function App() {  
  const [ data, setData ] = useState([])

  const getData = async () => {
    const res = await fetch('/api/customers').then((res) => res.json());
    return res;
  }
  useEffect(() => {
    getData().then(res => {
      setData(res)
     });
  }, []);

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
          [data][0].map(c => {
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
