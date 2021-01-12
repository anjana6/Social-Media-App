import express from 'express';
import route from './routes/index';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(route);


app.listen(PORT, () => {console.log(`Server is running on ${PORT}`)})