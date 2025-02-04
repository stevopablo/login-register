const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authConfig = require('../config/authConfig');
// authConfig
// const authConfig = require('../config/authConfig'); // Certifique-se de ter esse arquivo de configuração

const router = express.Router();

router.post('/auth/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).send({ error: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({ error: 'Invalid password' });
        }

        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: 86400, // Expira em 24 horas
        });

        res.send({ user, token });
    } catch (err) {
        return res.status(400).send({ error: 'Login failed' });
    }
});

router.post('/auth/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userExists = await User.findOne({ username });
        if (userExists) {
            return res.status(400).send({ error: 'User already exists' });
        }

        const user = new User({ username, password });
        await user.save();
        res.status(201).send({ msg: `${user.username} registered successfully` });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

module.exports = router;