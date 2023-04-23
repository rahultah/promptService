const Joi = require("joi");
const constants = require("../../utils/constants");
const postPromptsValidators = Joi.object().keys({
    userId: Joi.string().required(),
    promptType: Joi.string().valid(
        constants.promptType.SINGLE_PROMPT
    ),
    promptName: Joi.string().required(),
    promptValue: Joi.string().required()
})
module.exports = postPromptsValidators
