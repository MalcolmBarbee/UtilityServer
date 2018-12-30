const gifs = require('./gif')

const math = require('./mathRoutes')

const express = require('express');

const app = express();

const port = 3002;

app.listen(port, () => {

    console.log(`Listening at port ${port}`)
})

app.get('/math/add', (req, res) => {

    let {
        a,
        b,
    } = req.query;

    //console.log(math.add(a,b))

    res.send(`called add: ${a} + ${b} = ${math.add(a,b)}`)
});


app.get('/math/multiply', (req, res) => {

    const {
        a,
        b
    } = req.query

    res.send(`called multiply: ${a} * ${b} = ${math.multiply(a,b)}`)
});

app.get('/math/subtract', (req, res) => {

    const {
        a,
        b
    } = req.query

    res.send(`called subtract: ${a} - ${b} =  ${math.subtract(a,b)}`)
})

app.get('/math/divide', (req, res) => {

    const {
        a,
        b
    } = req.query

    res.send(`called divide: ${a} / ${b} = ${math.divide(a,b)}`)
})

app.get('/gif', (required, res) => {

    //const {} = req.query

        const req = new XMLHttpRequest();
        req.open('GET', url);
        req.addEventListener('load', res => {
            const data = JSON.parse(respond.currentTarget.response);
            cb(data)
        })
        req.send();
    

    res.send(`called giphy: ${gifs.getGif()}`)
})