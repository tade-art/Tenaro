import express from 'express';
import masterController from '../src/api/masterController';

const app = express();

app.use(express.json());
app.use('/api', masterController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
