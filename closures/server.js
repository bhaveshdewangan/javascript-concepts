const express = require('express');
const app = express();
app.use(express.json())
const bcrypt = require('bcrypt')
const users = [];

// to get the request from browser
app.use('/static', express.static('dev'));

app.get('/', (request, response) => {
    response.sendFile('src/index.html', { root: 'dev' })
})

app.get('/user', (req, res) => {
    res.send(users);
})

app.post('/user', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        console.log(salt)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        console.log(hashedPassword)
        const user = { username: req.body.username, password: hashedPassword }
        users.push(user)
        res.status(201).send();
    } catch {
        res.status(500).send('error occured');
    }
})

app.post('/user/login', async (req, res) => {
    const user = users.find(user => user.username === req.body.username);
    if (user == null) {
        res.status(400).send('User not found')
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            res.send("Success");
        } else {
            res.send("Not allowed");
        }
        res.status(201).send();
    } catch {
        res.status(500).send('error occured');
    }
})


// define a port listing to this app
app.listen(3000, "0.0.0.0", () => { });