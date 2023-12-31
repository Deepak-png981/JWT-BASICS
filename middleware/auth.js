
const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');
const authenticationMiddleware = async (req, res, next) => {
    const authHeaders = req.headers.authorization;
    if (!authHeaders || !authHeaders.startsWith('Bearer ')) {
        throw new CustomAPIError('No token provided', 400);
    }
    const token = authHeaders.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decoded;
        req.user = { id, username };
        next();
    } catch (error) {
        throw new CustomAPIError('Not authorized to access this route', 400);
    }
}

module.exports = authenticationMiddleware;