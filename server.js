import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import fileRoutes from './routes/fileRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import roomRoutes from './routes/roomRoutes.js';
import socketHandler from './sockets/socketHandler.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;
const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';

connectDB();

app.use(cors({ origin: clientUrl, credentials: true }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/files', fileRoutes);

const io = new Server(server, {
  cors: {
    origin: clientUrl,
    methods: ['GET', 'POST']
  }
});

socketHandler(io);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
