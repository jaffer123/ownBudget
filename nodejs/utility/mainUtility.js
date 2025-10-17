const jwt = require('jsonwebtoken');

const parseCookie = (cookie = '') => {
  return cookie.split(';').reduce((acc, part) => {
    const [key, value] = part.trim().split('=');
    if (key) acc[key] = value;
    return acc;
  }, {});
};

const decodeToken = (token, res) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'ownbudget-authkey');
  } catch (err) {
    return res.status(401).json({ auth: false, message: 'Invalid token',err });
  }
};

const parseAuth = (authHeader = '') => {
  return authHeader.startsWith('Bearer ')
    ? authHeader.split(' ')[1]
    : '';
};

module.exports = {
  parseCookie,
  decodeToken,
  parseAuth,
};
