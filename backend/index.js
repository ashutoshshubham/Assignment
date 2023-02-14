const express = require('express');

const userRouter = require('./routers/userRouter')


const cors = require('cors')




const app = express();
const port = 8000;


app.use(cors({
    origin : ['http://localhost:3000']
}));


app.use(express.json());

app.use('/user', userRouter);















app.listen(port, () => {
    console.log('Server Started')
})