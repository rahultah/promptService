module.exports.HttpStatusCode = {
    OK: 200,
    INTERNAL_SERVER_ERROR: { code: 500, response: { status: "ERROR", message: "Some Internal Error Occured " } },
    INVALID_REQUEST: 403,
    NOT_FOUND: 404,
}
