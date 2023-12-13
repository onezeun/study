// 라이브러리 불러오는 코드
const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs') 

let db;
const url = 'DB URL 주소'
new MongoClient(url).connect().then((client) => {
    console.log('DB연결성공');
    db = client.db('forum');

    app.listen(8080, () => {
      console.log('http://localhost:8080 에서 서버 실행중');
    });
  })
  .catch((err) => {
    console.log(err);
  });

// 사이트 접속시 작성한 글자 보내라는 뜻
app.get('/', function (요청, 응답) {
  응답.sendFile(__dirname + '/index.html');
});


app.get('/news', function (요청, 응답) {
  응답.send('내일 비온대용');
});

app.get('/list', async function (요청, 응답) {
  let result = await db.collection('post').find().toArray()
  console.log(result)
  응답.send(result);
});