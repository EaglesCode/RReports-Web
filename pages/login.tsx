import {
  Heading,
  Button,
  Center,
  Input,
  FormControl,
  FormLabel,
  Box,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";

import firebase from "../libs/firebase";

const Login = () => {
  const toast = useToast();

  const auth = firebase.auth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Sent, setSent] = useState(false);
  const router = useRouter();
  const Authentificate = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSent(true);

    try {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          const res = await user.getIdTokenResult();

          if (res.claims.mayor != null)
            if (typeof res.claims.mayor == "boolean")
              if (res.claims.mayor == true) {
                toast({ title: "Conectat cu succes!", status: "success" });
                router.push("/dashboard");
                return setSent(false);
              }
          toast({
            title: "Parola sau email-ul sunt incorecte",
            status: "error",
            isClosable: true,
          });
          await auth.signOut(); // Gtfo, you're not a mayor!! 😈
          return setSent(false);
        })
        .catch(() => {
          toast({
            title: "Parola sau email-ul sunt incorecte",
            status: "error",
            isClosable: true,
          });
          setSent(false);
        });
    } catch {
      toast({
        title: "Cateva erori interne, incearca mai tarziu",
        status: "error",
        isClosable: true,
      });
      setSent(false);
    }
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
          <Heading marginBottom="2">Conectare Cont</Heading>
        </Center>
        <form onSubmit={Authentificate}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="Adresa dvs. de email"
            />
          </FormControl>
          <FormControl mt={5} isRequired>
            <FormLabel>Parola</FormLabel>
            <Input
              type="password"
              onChange={(e) => setPassword(e.currentTarget.value)}
              placeholder="Parola dvs."
            />
          </FormControl>
          <Center>
            <Button
              isLoading={Sent}
              width={{ md: "50%", xs: "80%" }}
              mt={4}
              type="submit"
            >
              Acceseaza contul
            </Button>
          </Center>
        </form>
      </Box>
    </Center>
  );
};
export default Login;
