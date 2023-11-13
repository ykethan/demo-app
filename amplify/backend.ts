import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource.js";
import { data } from "./data/resource.js";
import * as cdk from "aws-cdk-lib";
import * as rum from "aws-cdk-lib/aws-rum";
import * as iam from "aws-cdk-lib/aws-iam";

const backend = defineBackend({
  auth,
  data,
});

// backend.resources.auth.resources.cfnResources.userPool.deletionProtection ="ACTIVE";

// Object.values(backend.resources.data.resources.cfnResources.cfnTables).forEach(
//   (table) => {
//     table.pointInTimeRecoverySpecification = {
//       pointInTimeRecoveryEnabled: true,
//     };
//   }
// );

const identityPoolId =
  backend.resources.auth.resources.cfnResources.identityPool.ref;

backend.resources.auth.resources.cfnResources.identityPool.allowUnauthenticatedIdentities =
  true;

const amplifyRum = backend.getStack("amplify-rum-stack");
const applicationName = `amplify-example.com`;

backend.resources.auth.resources.unauthenticatedUserIamRole.attachInlinePolicy(
  new iam.Policy(amplifyRum, "rum-policy-cdk", {
    statements: [
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ["rum:PutRumEvents"],
        resources: [
          `arn:aws:rum:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:appmonitor/${applicationName}`,
        ],
      }),
    ],
  })
);

const cwRumAppMonitor = new rum.CfnAppMonitor(
  amplifyRum,
  "cwrum-amplify-app-monitor",
  {
    domain: "localhost",
    name: applicationName,
    appMonitorConfiguration: {
      allowCookies: true,
      enableXRay: false,
      sessionSampleRate: 1,
      telemetries: ["errors", "performance", "http"],
      identityPoolId: identityPoolId,
      guestRoleArn:
        backend.resources.auth.resources.unauthenticatedUserIamRole.roleArn,
    },
    cwLogEnabled: true,
  }
);

const out = new cdk.CfnOutput(amplifyRum, "cw-rum-app-monitor-id", {
  value: cwRumAppMonitor.ref,
});

new cdk.CfnOutput(amplifyRum, "cw-rum-app-monitor-name", {
  value: cwRumAppMonitor.name,
});

new cdk.CfnOutput(amplifyRum, "cw-rum-app-monitor-domain", {
  value: cwRumAppMonitor.domain,
});
