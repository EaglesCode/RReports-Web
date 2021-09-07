import {
  Heading,
  Button,
  Center,
  Text,
  Box,
  useToast,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";

import firebase from "../../libs/firebase";

const Login = () => {
  const toast = useToast();

  const auth = firebase.auth();

  const [Sent, setSent] = useState(false);
  const router = useRouter();
  const leave = async () => {
    setSent(true);
    await auth
      .signOut()
      .then(() => toast({ title: "Deconectat cu succes!", status: "success" }));

    return router.push("/login");
  };
  const cancel = () => {
    return router.back();
  };
  return (
    <Center height="100vh">
      <Box
        borderRadius={23}
        padding={30}
        boxShadow="dark-lg"
        w={["90%", "80%", "60%", 600]}
      >
        <Center>
          <Heading marginBottom="2">Deconectare</Heading>
        </Center>
        <Center mb="6">
          <Text>Sunteti sigur/a ca vreti sa va deconectati?</Text>
        </Center>

        <HStack placeContent="center">
          <Button
            colorScheme="red"
            disabled={Sent}
            onClick={leave}
            isLoading={Sent}
          >
            Da, Deconecteaza-ma
          </Button>
          <Button colorScheme="blue" onClick={cancel} disabled={Sent}>
            Nu, Anuleaza
          </Button>
        </HStack>
      </Box>
    </Center>
  );
};
export default Login;
