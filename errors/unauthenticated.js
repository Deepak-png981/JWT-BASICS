const CustomAPIError = require('./custom-error');
class UnAuthenticatedError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = 401;
    }
}

module.exports = UnAuthenticatedError;
