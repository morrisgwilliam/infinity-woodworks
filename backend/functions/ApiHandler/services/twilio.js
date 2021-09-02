const sgMail = require('@sendgrid/mail');
const secretsManager = require("./secretsManager")

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const toAddress = process.env.ENV === "DEV" ? "wmorris@affinityit.com" : "scheduling@accunet.com"
const fromAddress = process.env.ENV === "DEV" ? "wmorris@affinityit.com" : "scheduling@accunet.com"


const sendNoTimesFoundEmail = async (data) => {
	try {
		const secret = await secretsManager.getSecret(secretsManager.secretNames.sendgrid)
		sgMail.setApiKey(secret.ApiKey);
		const msg = {
			to: toAddress,
			from: fromAddress,
			template_id: process.env.ENV === "DEV" ? "d-e1b0852f40864e96a1d0c35557bac17e" : "d-46770a0ae6734b759860da0cf098a194",
			personalizations: [{
				to: { email: toAddress },
				dynamic_template_data: {
				subject: `Client with no available times: ${data.FirstName} ${data.LastName}`,
				loan_consultant: data.LoanConsultant || "",
				cellphone: data.CellPhone || "",
				email: data.Email || "",
				first_name: data.FirstName || "",
				last_name: data.LastName || "",
				loan_purpose: data.LoanPurpose || ""
				}
			}]

		}
		const result = await sgMail.send(msg)
		console.log("Send no available times email result: ", JSON.stringify(result));
	} catch (error) {
		console.error(error)
		throw error
	}
}

module.exports = {
	sendNoTimesFoundEmail
    }