const AWS = require('aws-sdk')
const region = "us-east-1"
const secretsClient = new AWS.SecretsManager({
    region: region
});

const secretNames = {
    sendgrid: "SendGrid"
}

const getSecret = async (secretName) => {
    try {
        const result = await secretsClient.getSecretValue({ SecretId: secretName }).promise();

        // Decrypts secret using the associated KMS CMK.
        // Depending on whether the secret is a string or binary, one of these fields will be populated.
        // if ('SecretString' in data) {
        const secret = JSON.parse(result.SecretString);
        console.log(`SECRETTTTTTTTTTTTT RESPONSEEEEEE \n ${secret}`)
        return secret
        // }
    } catch (error) {
        console.log("-----ERRRRRRRRRORRRRRR-------- \n Unable to get Accuity Secret Credentials." + error.message)
    }
}

module.exports = {
    getSecret,
    secretNames
}