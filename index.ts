import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();
const app: Express = express();
const port = process.env.PORT;
const { routes } = require('./src/routes')



app.use(cors())
app.use(express.json())
app.use('/api', routes)

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});