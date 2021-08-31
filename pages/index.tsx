import { Container, Heading, Image, Text, Center } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coming Soon!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center height="100vh">
        <Container>
          <Center>
            <Image src="/logo.png" alt="" height="360" />
          </Center>
          <Center>
            <Heading as="h1" size="2xl">
              Work in Progress!
            </Heading>
          </Center>
          <Center paddingTop="1em">
            <Text fontSize="lg">
              Built with ❤ by{" "}
              <a href="https://www.facebook.com/RReports.dpit">EaglesCode</a>
            </Text>
          </Center>
        </Container>
      </Center>
    </div>
  );
}
