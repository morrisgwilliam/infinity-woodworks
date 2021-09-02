const dynamoose = require("dynamoose");

// when running locally point the table name to prod for now
// should be changed to a develop table 
// the latter is the table name on accunet infrastructure (prod)

const TABLE_NAME = process.env.ENV === "DEV" ? "accunet-journeys-applications-prod" : "accunet-journeys-applications-prod-accunet";



const applicationsSchema = new dynamoose.Schema(
    {
        CellPhone:
        {
            type: String,
            hashKey: true
        },
        FirstName: {
            type: String
        },
        LastName: {
            type: String
        },
        Email: {
            type: String
        },
        Borrower2_FirstName: {
            type: String
        },
        Borrower2_LastName: {
            type: String
        },
        LoanConsultant: {
            type: String
        },
        LoanPurpose: {
            type: String
        },
        FirstCloseDate: {
            type: String
        },
        LastCloseDate: {
            type: String
        },
        ClosingGoal: {
            type: String
        },
        ClosingGoalExplained: {
            type: String
        },
        CashBackAmount: {
            type: String
        },
        InterestRate: {
            type: String
        },
        LoanAmount: {
            type: String
        },
        EscrowPreference: {
            type: String
        }
    },
    {
    timestamps: {
        createdAt: "CreatedAt",
        updatedAt: "UpdatedAt"
    }
    }
)

module.exports = dynamoose.model(TABLE_NAME, applicationsSchema, {create: false})