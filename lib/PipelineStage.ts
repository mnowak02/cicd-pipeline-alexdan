import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { LambdaStack } from "./LambdaStack";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { S3Stack } from "./S3Stack";



export class PipelineStage extends Stage {
    constructor(scope: Construct, id: string, props: StageProps) {
        super(scope, id, props);

        new LambdaStack(this,'LambdaStack', {
            stageName: props.stageName
        });

        new S3Stack(this,'S3Stack',{})

        




    }

    

}