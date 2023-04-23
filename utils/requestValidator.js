const Joi = require("joi");

class requestValidator {
    static validateRequest(requestData, validationSchema) {
        const result = validationSchema.validate(requestData)
        return result
    }
}

module.exports = requestValidator