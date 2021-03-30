const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : conf.host,
    user : conf.user,
    password : conf.password,
    port : conf.port,
    database: conf.database
});

connection.connect();

// 데이터베이스 설정 완료된 후 multer 객체 형성
const multer = require('multer');
const upload = multer({dest: './upload'})

app.get('/api/customers', (req,res)=>{
    //res.send();
    connection.query(
        "SELECT * FROM CUSTOMER",
        (err, rows, fields) => {
            res.send(rows);
        }
    )

});

// 업로드 폴더를 사용자가 접근해 확인
app.use('/image', express.static('./upload')); //upload 공유
//사용자는 image 이름의 변수로 실제 profile image에 바이너리 데이터를 서버로 전송. 이걸 받겠다
app.post('/api/customers', upload.single('image'), (req, res) => {
    let sql = 'INSERT INTO CUSTOMER VALUE (null,?,?,?,?,?)';
    let image = '/image/' + req.file.filename;
    let name = req.body.name;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
    let params = [image, name, birthday, gender, job];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
            console.log(err);
            console.log(rows);
        }
    );
    
})

app.listen(port, () => console.log(`Listening on port ${port}`));
