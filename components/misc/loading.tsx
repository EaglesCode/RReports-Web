import {
  Box,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Image,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import "@fontsource/bebas-neue";
import { useRouter } from "next/dist/client/router";
import firebase from "../../libs/firebase";
const Loading = (props: { children: any }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user && router.pathname.includes("dashboard")) {
        setLoading(true);
        router.push("/login");
      } else if (user && router.pathname == "/login") {
        setLoading(true);
        router.push("/dashboard");
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    });
  }, [loading, router]);
  if (loading == true)
    return (
      <Box backgroundColor="grey.50" height="100vh">
        <Center height="70vh">
          <CircularProgress
            isIndeterminate
            color="red.400"
            size="50vh"
            thickness="4px"
          >
            <CircularProgressLabel>
              <Center>
                <Image src="/logo.svg" alt="" height="40vh" />
              </Center>
            </CircularProgressLabel>
          </CircularProgress>
        </Center>

        <Heading
          size="3xl"
          textAlign="center"
          color="#23374D"
          fontFamily="Bebas Neue"
        >
          BINE ATI VENIT!
        </Heading>
      </Box>
    );
  return props.children;
};

export default Loading;
