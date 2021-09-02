import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigw from '@aws-cdk/aws-apigateway';
import * as dynamo from '@aws-cdk/aws-dynamodb';
import * as s3 from "@aws-cdk/aws-s3";
import * as cloudfront from "@aws-cdk/aws-cloudfront";
// import * as secretsmanager from '@aws-cdk/aws-secretsmanager';
// import * as iam from '@aws-cdk/aws-iam';
export class BackendStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // s3 and cloudfront for web client
    const bucketName = process.env.ENVIRONMENT === "DEV" ? "accunet-journeys-website-prod" : "accunet-journeys-website-prod-account";
    const webSiteBucket = new s3.Bucket(this, "bucket-website", {
      bucketName: bucketName,
      publicReadAccess: true
    })

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
          behaviors: [{isDefaultBehavior: true}]
        }
      ]
      // uncomment the following lines of code when a cert is created
      // ,aliasConfiguration: {
      //   acmCertRef: "arn:aws:acm:us-east-1:000000000000:certificate/00000000-0000-0000-0000-0000000000",
      //   names: ['cdk-example.awsexamples.dev']
      // }
    })

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
    })
  
    const apiHandler = new lambda.Function(this, "ApiHandler", {
      runtime: lambda.Runtime.NODEJS_12_X,
      functionName: "Accunet-Journeys-ApiHandler",
      // lambda code from directory
      code: lambda.Code.fromAsset('functions/ApiHandler'),
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