import express from 'express';
import bodyParser from 'body-parser';
import studentRouter from './router/students.mjs';
import authRouter from './router/auth.mjs'

const app = express()
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


//middlewaire
app.use('/students', studentRouter)
app.use('/auth', authRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})