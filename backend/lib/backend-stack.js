"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendStack = void 0;
const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
const apigw = require("@aws-cdk/aws-apigateway");
const dynamo = require("@aws-cdk/aws-dynamodb");
const s3 = require("@aws-cdk/aws-s3");
const cloudfront = require("@aws-cdk/aws-cloudfront");
// import * as secretsmanager from '@aws-cdk/aws-secretsmanager';
// import * as iam from '@aws-cdk/aws-iam';
class BackendStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // s3 and cloudfront for web client
        const bucketName = process.env.ENVIRONMENT === "DEV" ? "accunet-journeys-website-prod" : "accunet-journeys-website-prod-account";
        const webSiteBucket = new s3.Bucket(this, "bucket-website", {
            bucketName: bucketName,
            publicReadAccess: true
        });
        const webSiteDistribution = new cloudfront.CloudFrontWebDistribution(this, "cdn-website", {
            comment: webSiteBucket.bucketName,
            errorConfigurations: [
                {
                    errorCode: 400,
                    responseCode: 200,
                    responsePagePath: "/index.html"
                },
                {
                    errorCode: 403,
                    responseCode: 200,
                    responsePagePath: "/index.html"
                },
                {
                    errorCode: 404,
                    responseCode: 200,
                    responsePagePath: "/index.html"
                }
            ],
            originConfigs: [
                {
                    s3OriginSource: {
                        s3BucketSource: webSiteBucket
                    },
                    behaviors: [{ isDefaultBehavior: true }]
                }
            ]
            // uncomment the following lines of code when a cert is created
            // ,aliasConfiguration: {
            //   acmCertRef: "arn:aws:acm:us-east-1:000000000000:certificate/00000000-0000-0000-0000-0000000000",
            //   names: ['cdk-example.awsexamples.dev']
            // }
        });
        // Secrets Manager
        // const secret = secretsmanager.Secret.fromSecretAttributes(this, 'ImportedSecret', {
        //   secretArn: 'arn:aws:secretsmanager:us-east-1:894549641974:secret:Accuity-Scheduling-ZI5L9A'
        // });
        // lambda, dynamoDB & API-GW
        const tbName = process.env.ENVIRONMENT === "DEV" ? "accunet-journeys-applications-prod" : "accunet-journeys-applications-prod-accunet";
        const applicationsTable = new dynamo.Table(this, 'applications-table', {
            partitionKey: {
                name: "CellPhone",
                type: dynamo.AttributeType.STRING
            },
            tableName: tbName
        });
        const apiHandler = new lambda.Function(this, "ApiHandler", {
            runtime: lambda.Runtime.NODEJS_12_X,
            functionName: "Accunet-Journeys-ApiHandler",
            // lambda code from directory
            code: lambda.Code.fromAsset('../backend/functions/ApiHandler'),
            // file and then export for entry point of lambda
            handler: 'index.handler',
            timeout: cdk.Duration.seconds(30),
            environment: {
                ENV: process.env.ENVIRONMENT || "failed setting of env on stack"
            }
        });
        // let policy = new iam.PolicyStatement();
        // policy.addResources('arn:aws:secretsmanager:us-east-1:894549641974:secret:Accuity-Scheduling-ZI5L9A');
        // policy.addActions("secretsmanager:DescribeSecret");
        // policy.addActions("secretsmanager:GetSecretValue");
        // policy.effect = iam.Effect.ALLOW
        // apiHandler.addToRolePolicy(policy)
        applicationsTable.grantFullAccess(apiHandler);
        new apigw.LambdaRestApi(this, "Backend-Api", {
            handler: apiHandler,
            restApiName: "accunet-journeys-api"
        });
    }
}
exports.BackendStack = BackendStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhY2tlbmQtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXFDO0FBQ3JDLDhDQUE4QztBQUM5QyxpREFBaUQ7QUFDakQsZ0RBQWdEO0FBQ2hELHNDQUFzQztBQUN0QyxzREFBc0Q7QUFDdEQsaUVBQWlFO0FBQ2pFLDJDQUEyQztBQUMzQyxNQUFhLFlBQWEsU0FBUSxHQUFHLENBQUMsS0FBSztJQUN6QyxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQ2xFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLG1DQUFtQztRQUNuQyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQyx1Q0FBdUMsQ0FBQztRQUNqSSxNQUFNLGFBQWEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQzFELFVBQVUsRUFBRSxVQUFVO1lBQ3RCLGdCQUFnQixFQUFFLElBQUk7U0FDdkIsQ0FBQyxDQUFBO1FBRUYsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQ3hGLE9BQU8sRUFBRSxhQUFhLENBQUMsVUFBVTtZQUNqQyxtQkFBbUIsRUFBRTtnQkFDbkI7b0JBQ0UsU0FBUyxFQUFFLEdBQUc7b0JBQ2QsWUFBWSxFQUFFLEdBQUc7b0JBQ2pCLGdCQUFnQixFQUFFLGFBQWE7aUJBQ2hDO2dCQUNEO29CQUNFLFNBQVMsRUFBRSxHQUFHO29CQUNkLFlBQVksRUFBRSxHQUFHO29CQUNqQixnQkFBZ0IsRUFBRSxhQUFhO2lCQUNoQztnQkFDRDtvQkFDRSxTQUFTLEVBQUUsR0FBRztvQkFDZCxZQUFZLEVBQUUsR0FBRztvQkFDakIsZ0JBQWdCLEVBQUUsYUFBYTtpQkFDaEM7YUFDRjtZQUNELGFBQWEsRUFBRTtnQkFDYjtvQkFDRSxjQUFjLEVBQUU7d0JBQ2QsY0FBYyxFQUFFLGFBQWE7cUJBQzlCO29CQUNELFNBQVMsRUFBRSxDQUFDLEVBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFDLENBQUM7aUJBQ3ZDO2FBQ0Y7WUFDRCwrREFBK0Q7WUFDL0QseUJBQXlCO1lBQ3pCLHFHQUFxRztZQUNyRywyQ0FBMkM7WUFDM0MsSUFBSTtTQUNMLENBQUMsQ0FBQTtRQUVGLGtCQUFrQjtRQUNsQixzRkFBc0Y7UUFDdEYsZ0dBQWdHO1FBQ2hHLE1BQU07UUFFTiw0QkFBNEI7UUFFNUIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUMsNENBQTRDLENBQUM7UUFFdkksTUFBTSxpQkFBaUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQ3JFLFlBQVksRUFBRTtnQkFDWixJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTTthQUNsQztZQUNELFNBQVMsRUFBRSxNQUFNO1NBQ2xCLENBQUMsQ0FBQTtRQUVGLE1BQU0sVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ3pELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsWUFBWSxFQUFFLDZCQUE2QjtZQUMzQyw2QkFBNkI7WUFDN0IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlDQUFpQyxDQUFDO1lBQzlELGlEQUFpRDtZQUNqRCxPQUFPLEVBQUUsZUFBZTtZQUN4QixPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ2pDLFdBQVcsRUFBRTtnQkFDWCxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLElBQUksZ0NBQWdDO2FBQ2pFO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsMENBQTBDO1FBQzFDLHlHQUF5RztRQUN6RyxzREFBc0Q7UUFDdEQsc0RBQXNEO1FBQ3RELG1DQUFtQztRQUVuQyxxQ0FBcUM7UUFFckMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTlDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQzNDLE9BQU8sRUFBRSxVQUFVO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7U0FDcEMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztDQUNGO0FBMUZELG9DQTBGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcbmltcG9ydCAqIGFzIGFwaWd3IGZyb20gJ0Bhd3MtY2RrL2F3cy1hcGlnYXRld2F5JztcbmltcG9ydCAqIGFzIGR5bmFtbyBmcm9tICdAYXdzLWNkay9hd3MtZHluYW1vZGInO1xuaW1wb3J0ICogYXMgczMgZnJvbSBcIkBhd3MtY2RrL2F3cy1zM1wiO1xuaW1wb3J0ICogYXMgY2xvdWRmcm9udCBmcm9tIFwiQGF3cy1jZGsvYXdzLWNsb3VkZnJvbnRcIjtcbi8vIGltcG9ydCAqIGFzIHNlY3JldHNtYW5hZ2VyIGZyb20gJ0Bhd3MtY2RrL2F3cy1zZWNyZXRzbWFuYWdlcic7XG4vLyBpbXBvcnQgKiBhcyBpYW0gZnJvbSAnQGF3cy1jZGsvYXdzLWlhbSc7XG5leHBvcnQgY2xhc3MgQmFja2VuZFN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIC8vIHMzIGFuZCBjbG91ZGZyb250IGZvciB3ZWIgY2xpZW50XG4gICAgY29uc3QgYnVja2V0TmFtZSA9IHByb2Nlc3MuZW52LkVOVklST05NRU5UID09PSBcIkRFVlwiID8gXCJhY2N1bmV0LWpvdXJuZXlzLXdlYnNpdGUtcHJvZFwiIDogXCJhY2N1bmV0LWpvdXJuZXlzLXdlYnNpdGUtcHJvZC1hY2NvdW50XCI7XG4gICAgY29uc3Qgd2ViU2l0ZUJ1Y2tldCA9IG5ldyBzMy5CdWNrZXQodGhpcywgXCJidWNrZXQtd2Vic2l0ZVwiLCB7XG4gICAgICBidWNrZXROYW1lOiBidWNrZXROYW1lLFxuICAgICAgcHVibGljUmVhZEFjY2VzczogdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCB3ZWJTaXRlRGlzdHJpYnV0aW9uID0gbmV3IGNsb3VkZnJvbnQuQ2xvdWRGcm9udFdlYkRpc3RyaWJ1dGlvbih0aGlzLCBcImNkbi13ZWJzaXRlXCIsIHtcbiAgICAgIGNvbW1lbnQ6IHdlYlNpdGVCdWNrZXQuYnVja2V0TmFtZSxcbiAgICAgIGVycm9yQ29uZmlndXJhdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGVycm9yQ29kZTogNDAwLFxuICAgICAgICAgIHJlc3BvbnNlQ29kZTogMjAwLFxuICAgICAgICAgIHJlc3BvbnNlUGFnZVBhdGg6IFwiL2luZGV4Lmh0bWxcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZXJyb3JDb2RlOiA0MDMsXG4gICAgICAgICAgcmVzcG9uc2VDb2RlOiAyMDAsXG4gICAgICAgICAgcmVzcG9uc2VQYWdlUGF0aDogXCIvaW5kZXguaHRtbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBlcnJvckNvZGU6IDQwNCxcbiAgICAgICAgICByZXNwb25zZUNvZGU6IDIwMCxcbiAgICAgICAgICByZXNwb25zZVBhZ2VQYXRoOiBcIi9pbmRleC5odG1sXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG9yaWdpbkNvbmZpZ3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHMzT3JpZ2luU291cmNlOiB7XG4gICAgICAgICAgICBzM0J1Y2tldFNvdXJjZTogd2ViU2l0ZUJ1Y2tldFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmVoYXZpb3JzOiBbe2lzRGVmYXVsdEJlaGF2aW9yOiB0cnVlfV1cbiAgICAgICAgfVxuICAgICAgXVxuICAgICAgLy8gdW5jb21tZW50IHRoZSBmb2xsb3dpbmcgbGluZXMgb2YgY29kZSB3aGVuIGEgY2VydCBpcyBjcmVhdGVkXG4gICAgICAvLyAsYWxpYXNDb25maWd1cmF0aW9uOiB7XG4gICAgICAvLyAgIGFjbUNlcnRSZWY6IFwiYXJuOmF3czphY206dXMtZWFzdC0xOjAwMDAwMDAwMDAwMDpjZXJ0aWZpY2F0ZS8wMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwXCIsXG4gICAgICAvLyAgIG5hbWVzOiBbJ2Nkay1leGFtcGxlLmF3c2V4YW1wbGVzLmRldiddXG4gICAgICAvLyB9XG4gICAgfSlcblxuICAgIC8vIFNlY3JldHMgTWFuYWdlclxuICAgIC8vIGNvbnN0IHNlY3JldCA9IHNlY3JldHNtYW5hZ2VyLlNlY3JldC5mcm9tU2VjcmV0QXR0cmlidXRlcyh0aGlzLCAnSW1wb3J0ZWRTZWNyZXQnLCB7XG4gICAgLy8gICBzZWNyZXRBcm46ICdhcm46YXdzOnNlY3JldHNtYW5hZ2VyOnVzLWVhc3QtMTo4OTQ1NDk2NDE5NzQ6c2VjcmV0OkFjY3VpdHktU2NoZWR1bGluZy1aSTVMOUEnXG4gICAgLy8gfSk7XG5cbiAgICAvLyBsYW1iZGEsIGR5bmFtb0RCICYgQVBJLUdXXG5cbiAgICBjb25zdCB0Yk5hbWUgPSBwcm9jZXNzLmVudi5FTlZJUk9OTUVOVCA9PT0gXCJERVZcIiA/IFwiYWNjdW5ldC1qb3VybmV5cy1hcHBsaWNhdGlvbnMtcHJvZFwiIDogXCJhY2N1bmV0LWpvdXJuZXlzLWFwcGxpY2F0aW9ucy1wcm9kLWFjY3VuZXRcIjtcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uc1RhYmxlID0gbmV3IGR5bmFtby5UYWJsZSh0aGlzLCAnYXBwbGljYXRpb25zLXRhYmxlJywge1xuICAgICAgcGFydGl0aW9uS2V5OiB7XG4gICAgICAgIG5hbWU6IFwiQ2VsbFBob25lXCIsXG4gICAgICAgIHR5cGU6IGR5bmFtby5BdHRyaWJ1dGVUeXBlLlNUUklOR1xuICAgICAgfSxcbiAgICAgIHRhYmxlTmFtZTogdGJOYW1lXG4gICAgfSlcbiAgXG4gICAgY29uc3QgYXBpSGFuZGxlciA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJBcGlIYW5kbGVyXCIsIHtcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMl9YLFxuICAgICAgZnVuY3Rpb25OYW1lOiBcIkFjY3VuZXQtSm91cm5leXMtQXBpSGFuZGxlclwiLFxuICAgICAgLy8gbGFtYmRhIGNvZGUgZnJvbSBkaXJlY3RvcnlcbiAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnLi4vYmFja2VuZC9mdW5jdGlvbnMvQXBpSGFuZGxlcicpLFxuICAgICAgLy8gZmlsZSBhbmQgdGhlbiBleHBvcnQgZm9yIGVudHJ5IHBvaW50IG9mIGxhbWJkYVxuICAgICAgaGFuZGxlcjogJ2luZGV4LmhhbmRsZXInLFxuICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMzApLFxuICAgICAgZW52aXJvbm1lbnQ6IHtcbiAgICAgICAgRU5WOiBwcm9jZXNzLmVudi5FTlZJUk9OTUVOVCB8fCBcImZhaWxlZCBzZXR0aW5nIG9mIGVudiBvbiBzdGFja1wiXG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gbGV0IHBvbGljeSA9IG5ldyBpYW0uUG9saWN5U3RhdGVtZW50KCk7XG4gICAgLy8gcG9saWN5LmFkZFJlc291cmNlcygnYXJuOmF3czpzZWNyZXRzbWFuYWdlcjp1cy1lYXN0LTE6ODk0NTQ5NjQxOTc0OnNlY3JldDpBY2N1aXR5LVNjaGVkdWxpbmctWkk1TDlBJyk7XG4gICAgLy8gcG9saWN5LmFkZEFjdGlvbnMoXCJzZWNyZXRzbWFuYWdlcjpEZXNjcmliZVNlY3JldFwiKTtcbiAgICAvLyBwb2xpY3kuYWRkQWN0aW9ucyhcInNlY3JldHNtYW5hZ2VyOkdldFNlY3JldFZhbHVlXCIpO1xuICAgIC8vIHBvbGljeS5lZmZlY3QgPSBpYW0uRWZmZWN0LkFMTE9XXG5cbiAgICAvLyBhcGlIYW5kbGVyLmFkZFRvUm9sZVBvbGljeShwb2xpY3kpXG4gICAgXG4gICAgYXBwbGljYXRpb25zVGFibGUuZ3JhbnRGdWxsQWNjZXNzKGFwaUhhbmRsZXIpO1xuICAgIFxuICAgIG5ldyBhcGlndy5MYW1iZGFSZXN0QXBpKHRoaXMsIFwiQmFja2VuZC1BcGlcIiwge1xuICAgICAgaGFuZGxlcjogYXBpSGFuZGxlcixcbiAgICAgIHJlc3RBcGlOYW1lOiBcImFjY3VuZXQtam91cm5leXMtYXBpXCJcbiAgICB9KTtcblxuICB9XG59Il19