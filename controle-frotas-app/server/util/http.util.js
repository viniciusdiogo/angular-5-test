
exports.respNotFound = function (message) {
    return {
        message: message || 'The requested resource couldn\'t be found',
        statusCode: 404
    }
};

exports.respBadRequest = function (message) {
    return {
        message: message || 'The request was malformed or invalid',
        statusCode: 400
    }
};

exports.respOK = function (data) {
    return {
        data: data,
        statusCode: 200
    }
};

exports.respError = function (message) {
    return {
        message: message || 'Internal Server Error',
        statusCode: 500
    }
};
