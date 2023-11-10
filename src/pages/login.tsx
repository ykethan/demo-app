import { useRouter } from "next/router";
import { useEffect } from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function LoginPage() {
  const { route } = useAuthenticator((context) => [context.route]);
  const router = useRouter();

  useEffect(() => {
    if (route === "authenticated") {
      router.push("/");
    }
  }, [route, router]);

  return (
    <div className="flex justify-center min-h-screen">
      <Authenticator
        loginMechanisms={["email"]}
        signUpAttributes={["preferred_username"]}
      ></Authenticator>
    </div>
  );
}
