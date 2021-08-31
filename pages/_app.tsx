import { AppProps } from "next/dist/next-server/lib/router/router";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Loading from "../components/misc/loading";
import "@fontsource/montserrat";
function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    fonts: {
      heading: "Montserrat",
      body: "Montserrat",
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Loading>
        <Component {...pageProps} />
      </Loading>
    </ChakraProvider>
  );
}

export default MyApp;
