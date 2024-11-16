const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: "Access Denied, no token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ message: "Invalid token" });
    }
};

// authController.js

const loginUser = (req, res) => {
  // Your login logic here
  res.send('Login successful!');
};

const registerUser = (req, res) => {
  // Your registration logic here
  res.send('User registered!');
};

module.exports = { loginUser, registerUser };

module.exports = authMiddleware;
