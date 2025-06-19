import express from 'express';


const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello I am the chaya route API');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
