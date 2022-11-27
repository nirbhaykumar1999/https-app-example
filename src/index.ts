import express from 'express';
import https from 'https';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.route('/ping').get((req, res) => {
  return res.send("pong");
});

const httpsServer = https.createServer({}, app);

httpsServer
 .listen(3000, () => {
    console.log('Server listening on port 3000. URL: https://localhost:3000');
  });
