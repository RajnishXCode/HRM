const jwt = require('jsonwebtoken');
const seceret = "iamasecret";

module.exports = {
    async generateToken(payload) {
        return jwt.sign(payload, seceret, { expiresIn: '24h' });
    },
    async verifyToken(token) {
        if (!token) {
            return null;
        }
        return jwt.verify(token, seceret);
    }
};