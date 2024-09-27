#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkTestPipeline } from '../lib/cdktestpipeline';

const app = new cdk.App();

new CdkTestPipeline(app, 'cicd-v3-pipeline-new', {
  env: { account: '264852106485', region: 'ap-south-1' },
});

