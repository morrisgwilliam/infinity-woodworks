import axios from "axios"

const basePath = "https://a9xa4edssc.execute-api.us-east-1.amazonaws.com/prod/"
export const sendQuote = (payload) => {
	const config = {
		method: "POST",
		data: payload,
		url: `${basePath}quote`
	}
	return axios(config)
}