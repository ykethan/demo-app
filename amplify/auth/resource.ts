import { defineAuth } from "@aws-amplify/backend";

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: "Your verification code is {####}",
      verificationEmailBody: (code: string) =>
        `
        <Text>
            Welcome to my new Amplify app! 
        </Text>
        <Text>
          Your verification code is
        </Text>
          ${code}
            `,
      verificationEmailStyle: "CODE",
    },
  },
  userAttributes: {
    preferredUsername: {
      required: true,
    },
  },
});
