
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Server is ready');
})

app.get('/twitter', (req, res) => {
    res.send('this is twitter page')
})

// get a list of 5 jokes
app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A Joke',
            content: 'This is a joke 1'
        },
        {
            id: 2,
            title: 'A Joke',
            content: 'This is a joke 2'
        },
        {
            id: 3,
            title: 'A Joke',
            content: 'This is a joke 3'
        },
        {
            id: 4,
            title: 'A Joke',
            content: 'This is a joke 4'
        },
        {
            id: 5,
            title: 'A Joke',
            content: 'This is a joke 5'
        },
    ];
    res.send(jokes);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})