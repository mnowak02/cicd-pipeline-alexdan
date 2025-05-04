import { Stack, StackProps } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";


//interface LambdaStackProps extends StackProps {
//    stageName?: string
//}

export class S3Stack extends Stack {
    constructor(scope: Construct, id: string, props: StackProps) {
        super(scope, id, props);

        new Bucket(this, 'mybucket', {
            
        })
    }
}