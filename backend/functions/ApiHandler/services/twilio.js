const sgMail = require('@sendgrid/mail');
//const secretsManager = require("./secretsManager")

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const toAddress = "contact@morrisgwilliam.com"
const fromAddress = "contact@morrisgwilliam.com"
const templateID = "d-f361ed369f684a74b3422e8055c24589"


const sendQuoteEmail = async (data) => {
	try {
		//const secret = await secretsManager.getSecret(secretsManager.secretNames.sendgrid)
		// sgMail.setApiKey(secret.ApiKey);
		sgMail.setApiKey("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");
		const msg = {
			to: toAddress,
			from: fromAddress,
			template_id: templateID,
			personalizations: [{
				to: { email: toAddress },
				dynamic_template_data: {
				subject: `Quote From Website`,
				first_name: data.firstName || "",
				last_name: data.lastName || "",
				company_name: data.companyName || "",
				address: data.address || "",
				email: data.email || "",
				phone: data.phone || "",
				pickup_date: data.pickupDate || "",
				receiving_hours: data.receivingHours || "",
				description: data.description || "",
				note: data.note || "",
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
	sendQuoteEmail
    }