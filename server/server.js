import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRoute.js';
import connectDB from './config/mongodb.js';
import imageRouter from './routes/imageRoutes.js';

// App Config
const PORT = process.env.PORT || 4000;
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

app.get('/', (req, res) => res.send('API Working'));

// Connect DB and Start Server
(async () => {
  await connectDB();
  app.listen(PORT, () => console.log('Server running on port ' + PORT));
})();
