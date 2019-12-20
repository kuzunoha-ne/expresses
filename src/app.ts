import e from 'express';
import {Request, Response} from 'express';

const app = e();

app.use(e.json());
app.use(e.urlencoded({ extended: true }));

app.get('/', (req:Request, res:Response)=>{
    res.status(200).json(
        {
            message: 'HelloWorld!'
        }
        )
});

app.listen(9000, ()=>{
    console.log('Listen 9000')
})