import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import config from "../../amplifyconfiguration.json";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

Amplify.configure({
  ...config,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Authenticator.Provider>
      <Component {...pageProps} />
    </Authenticator.Provider>
  );
}
