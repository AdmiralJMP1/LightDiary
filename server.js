import express from 'express';
import middleware from './middleware';
import { config } from 'dotenv';

config();
const app = express();
middleware(app, express);

app.listen(process.env.PORT, () => {
  console.log('Express server listening');
});
