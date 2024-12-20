export const config = {
  gitHubUser: 'ankitanagarale',
  gitHubRepo: 'ankitanagarale/cdk-test-pipeline',
  gitHubBranch: 'main',
  codeBuildEnvironmentType: 'LINUX_CONTAINER',
  codeBuildComputeType: 'BUILD_GENERAL1_SMALL',
  codeBuildImage: 'aws/codebuild/amazonlinux2-x86_64-standard:5.0',
  labAccountId: '264852106485',
 codeStarConnectionArn: 'arn:aws:codeconnections:eu-central-1:264852106485:connection/f124b64a-7530-43d0-9f4b-e0511e7fb78e',
 codeStarRoleArn: 'arn:aws:codeconnections:us-east-1:891377353125:connection/*',
  bucketLifecyclePolicy: {
    id: 'lifecycle-policy',
    status: 'Enabled',
    prefix: 'SourceArti/',
    transitionInDays: 30,
    expirationInDays: 300,
  },
};
