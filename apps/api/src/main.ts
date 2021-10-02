import * as express from 'express';
import * as helmet from 'helmet';
import * as cors from 'cors';

const app = express();

app.use(helmet());
app.use(cors());

const greeting = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
