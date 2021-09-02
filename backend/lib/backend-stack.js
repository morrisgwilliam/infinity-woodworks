"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendStack = void 0;
const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
const apigw = require("@aws-cdk/aws-apigateway");
// import * as secretsmanager from '@aws-cdk/aws-secretsmanager';
// import * as iam from '@aws-cdk/aws-iam';
class BackendStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const apiHandler = new lambda.Function(this, "ApiHandler", {
            runtime: lambda.Runtime.NODEJS_12_X,
            functionName: "infinity-woodworks-api-handler",
            // lambda code from directory
            code: lambda.Code.fromAsset('functions/ApiHandler'),
            // file and then export for entry point of lambda
            handler: 'index.handler',
            timeout: cdk.Duration.seconds(30)
        });
        new apigw.LambdaRestApi(this, "Backend-Api", {
            handler: apiHandler,
            restApiName: "infinity-woodworks-api"
        });
    }
}
exports.BackendStack = BackendStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhY2tlbmQtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXFDO0FBQ3JDLDhDQUE4QztBQUM5QyxpREFBaUQ7QUFFakQsaUVBQWlFO0FBQ2pFLDJDQUEyQztBQUMzQyxNQUFhLFlBQWEsU0FBUSxHQUFHLENBQUMsS0FBSztJQUN6QyxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQ2xFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ3pELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsWUFBWSxFQUFFLGdDQUFnQztZQUM5Qyw2QkFBNkI7WUFDN0IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDO1lBQ25ELGlEQUFpRDtZQUNqRCxPQUFPLEVBQUUsZUFBZTtZQUN4QixPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1NBQ2xDLENBQUMsQ0FBQztRQUVILElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQzNDLE9BQU8sRUFBRSxVQUFVO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDdEMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztDQUNGO0FBcEJELG9DQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcbmltcG9ydCAqIGFzIGFwaWd3IGZyb20gJ0Bhd3MtY2RrL2F3cy1hcGlnYXRld2F5JztcblxuLy8gaW1wb3J0ICogYXMgc2VjcmV0c21hbmFnZXIgZnJvbSAnQGF3cy1jZGsvYXdzLXNlY3JldHNtYW5hZ2VyJztcbi8vIGltcG9ydCAqIGFzIGlhbSBmcm9tICdAYXdzLWNkay9hd3MtaWFtJztcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuICBcbiAgICBjb25zdCBhcGlIYW5kbGVyID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcIkFwaUhhbmRsZXJcIiwge1xuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEyX1gsXG4gICAgICBmdW5jdGlvbk5hbWU6IFwiaW5maW5pdHktd29vZHdvcmtzLWFwaS1oYW5kbGVyXCIsXG4gICAgICAvLyBsYW1iZGEgY29kZSBmcm9tIGRpcmVjdG9yeVxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdmdW5jdGlvbnMvQXBpSGFuZGxlcicpLFxuICAgICAgLy8gZmlsZSBhbmQgdGhlbiBleHBvcnQgZm9yIGVudHJ5IHBvaW50IG9mIGxhbWJkYVxuICAgICAgaGFuZGxlcjogJ2luZGV4LmhhbmRsZXInLFxuICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMzApXG4gICAgfSk7XG4gICAgXG4gICAgbmV3IGFwaWd3LkxhbWJkYVJlc3RBcGkodGhpcywgXCJCYWNrZW5kLUFwaVwiLCB7XG4gICAgICBoYW5kbGVyOiBhcGlIYW5kbGVyLFxuICAgICAgcmVzdEFwaU5hbWU6IFwiaW5maW5pdHktd29vZHdvcmtzLWFwaVwiXG4gICAgfSk7XG5cbiAgfVxufSJdfQ==