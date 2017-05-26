class HttpError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status || 500;

    }
    static unauthorized() {
        return new HttpError('Unauthorization', 404)
    }

}

module.exports = {
    HttpError,
}