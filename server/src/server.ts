import express from 'express';

const app = express();
const PORT = 3333;

app.get('/', (req, res) => { });

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
 });