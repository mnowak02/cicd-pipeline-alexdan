import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';


export class CdkCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'AwesomePipeline',{
      pipelineName: "YouAreAwsome",
      synth: new ShellStep('Synth',{
        input: CodePipelineSource.gitHub('mnowak02/cicd-pipeline-alexdan','cicd-practice1'),
        commands: [
          'npm ci',
          'npx cdk synth',
          'ls -al'
        ]
      })

    })


  }
}
