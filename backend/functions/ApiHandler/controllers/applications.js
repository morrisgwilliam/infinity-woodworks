// NLX variable request docs found at https://docs.studio.nlx.ai/variables/engineering

const ApplicationsModel = require("../models/applications")


const getByCellPhone = async (cellPhone) => {
    try {
        console.log(`Querying by cell phone\n`, cellPhone)
        const application = await ApplicationsModel.query("CellPhone")
                                    .eq(cellPhone)
                                    .exec()
        const result = application.toJSON();
        console.log(`Querying by name COMPLETE\n`)
        return result[0]
    } catch (error) {
        throw error
    }
}
const createApplication = async (application) => {
    try {
        console.log(`Creating application\n`, application)
        const newApplication = new ApplicationsModel({...application})
        await newApplication.save()
        console.log(`New Applications saved\n`)
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getByCellPhone,
    createApplication
}