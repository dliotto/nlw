import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('Listagem');

    res.json([
        'Douglas',
        'jhou',
        'teste'
    ]);
});

app.listen(3333);