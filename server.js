const express = require('express');
const app =express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/api/customers', (req,res) =>{
    res.send([
        {
        'id':1,
        'image': 'https://placeimg.com/64/64/1',
        'name':'유재현',
        'birthday':'19941230',
        'gender':'남성',
        'job':'개발자',
      },
      {
        'id':2,
        'image': 'https://placeimg.com/64/64/2',
        'name':'김하림',
        'birthday':'19970910',
        'gender':'여성',
        'job':'운동강사',
      },
      {
        'id':3,
        'image': 'https://placeimg.com/64/64/3',
        'name':'이동혁',
        'birthday':'19940403',
        'gender':'남성',
        'job':'서버관리자',
      },
      {
        'id':4,
        'image': 'https://placeimg.com/64/64/4',
        'name':'김준석',
        'birthday':'19940403',
        'gender':'남성',
        'job':'개발자',
      },
      {
        'id':5,
        'image': 'https://placeimg.com/64/64/5',
        'name':'전태룡',
        'birthday':'19940403',
        'gender':'남성',
        'job':'개발자',
      },
      {
        'id':6,
        'image': 'https://placeimg.com/64/64/6',
        'name':'최규민',
        'birthday':'19940403',
        'gender':'남성',
        'job':'퍼블리셔',
      }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));