/* 
    - Task of a handler is handle the requests
    and send reposne accrodingly
*/
const promptsModel = require("../dbHandler").getPromptsModel
const authenticoUtils = require("../utils/authenticoUtils")
const constants = require("../utils/constants")
class TestController {
    constructor() { }

    async processPromptValue(promptValue) {
        const occurences = ((promptValue.match(/{}/g) || []).length);
        return occurences
    }
    async postPrompts({
        promptName, promptType, promptValue, userId
    }) {
        const preparedResponse = {}
        const validateUserId = authenticoUtils.authticateUser()
        if (validateUserId) {
            const countOfPlaceHolders = await this.processPromptValue(promptValue)
            if (countOfPlaceHolders && countOfPlaceHolders == 0) {
                preparedResponse.status = constants.NO_PLACEHOLDERS
            }
            else {
                const modelToSave = promptsModel()
                const duplicateExists = await modelToSave.findOne(
                    { promptName: promptName },
                )
                let prompt;
                if (duplicateExists) {
                    prompt = await modelToSave.findOneAndUpdate(
                        { promptName: promptName },
                        {
                            promptName: promptName,
                            promptType: promptType,
                            promptValue: promptValue,
                            placeHolderCount: countOfPlaceHolders,
                            userId: userId
                        })
                    //Removing unwanted keys 
                    delete (prompt.__v)
                    delete (prompt._id)
                    preparedResponse.prompt = prompt
                    preparedResponse.status = "UPDATED"

                }
                else {
                    prompt = await modelToSave.insertMany(
                        {
                            promptName: promptName,
                            promptType: promptType,
                            promptValue: promptValue,
                            placeHolderCount: countOfPlaceHolders
                        })
                    preparedResponse.prompt = prompt[0]
                    preparedResponse.status = "INSERTED"
                }
            }

        }
        else {
            preparedResponse.status = constants.INVALID_USER
        }
        if (!preparedResponse) {
            throw new Error("Unable to prepare response", false);
        }
        return preparedResponse;
    }
}

module.exports = new TestController();