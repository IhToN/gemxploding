import * as express from 'express';
import { createServer } from 'http';
import { Server as SocketServer } from 'socket.io';
import * as helmet from 'helmet';
import * as cors from 'cors';

import * as pkg from '../../../package.json';

import socketHandler from './socketHandler';

const app = express();
const server = createServer(app);
const io = new SocketServer(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] },
});
io.on('connection', (socket) => {
  socketHandler(socket, io);
});

app.use(helmet());
app.use(cors());

const greeting = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

app.get('/', (req, res) => {
  res.json({
    name: `${pkg.name}-api`,
    version: pkg.version,
    description: pkg.description,
  });
});

const port = process.env.port || 3333;

server.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
