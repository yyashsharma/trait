import express from 'express'
import { connectDb } from './utils/db.js';
import { config } from 'dotenv'
import studentRoutes from './routes/studentRoutes.js'
import gradeRangeRoutes from './routes/gradeRangeRoutes.js'
import personalityTraitRoutes from './routes/personalityTraitRoutes.js'
import cors from 'cors'


config();


const app = express();

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST",],
    credentials: true,  
}))

app.use(express.json());

connectDb();

app.get('/', (req, res) => {
    res.send("api is working")
})

app.use('/api/v1/student', studentRoutes);
app.use('/api/v1/gradeRange', gradeRangeRoutes);
app.use('/api/v1/personality', personalityTraitRoutes);


app.listen(process.env.PORT, () => {
    console.log("server is running on 4000!")
})