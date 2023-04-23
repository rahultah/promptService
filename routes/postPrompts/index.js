const router = require("express").Router();
const validationSchema = require("./postPrompts.validator")
const validator = require("../../utils/requestValidator")
const postPromptsHandler = require("../../handlers/postPromptsHandler");
const { HttpStatusCode } = require("../../utils/httpStatusCode");

const postPrompts = async (request, response, next) => {
    const requestData = request.body;
    try {
        console.log(JSON.stringify(requestData));
        const validationResult = validator.validateRequest(requestData, validationSchema);
        if (validationResult && validationResult.error) {
            response.status(HttpStatusCode.INVALID_REQUEST).json(validationResult)
        }
        else {
            const apiResponse = await postPromptsHandler.postPrompts(requestData);
            response.status(HttpStatusCode.OK).json(apiResponse);
        }
    } catch (error) {
        console.log(`ERROR: unable to process test - ${error.message} ${error.stack}`);
        response.status(HttpStatusCode.INTERNAL_SERVER_ERROR.code).json(HttpStatusCode.INTERNAL_SERVER_ERROR.response);
    }
};

router.post(
    "/",
    postPrompts,
);

module.exports = router;
