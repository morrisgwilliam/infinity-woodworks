import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigw from '@aws-cdk/aws-apigateway';

// import * as secretsmanager from '@aws-cdk/aws-secretsmanager';
// import * as iam from '@aws-cdk/aws-iam';
export class BackendStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
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