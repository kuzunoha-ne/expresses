import e from 'express';
import {Request, Response} from 'express';

const app = e();

app.get('/', (req:Request, res:Response)=>{
    // 200 status
    res.status(400).send("hoge");
});

app.get('/', (req:Request, res:Response)=>{
    // 400 status
    res.status(400).send("huga");
});


app.listen(9000, ()=>{
    console.log('Listen 9000')
})