import {
  Box,
  Wrap,
  Image,
  WrapItem,
  Heading,
  ModalContent,
  Modal,
  useDisclosure,
  ModalOverlay,
  Button,
  ModalCloseButton,
  Center,
  HStack,
  CircularProgress,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const ImagesCard = (props: { images: Array<string> }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [img, setImg] = useState<string>();
  const nextImage = () => {
    let i = props.images.findIndex((x) => x == img);
    if (i >= props.images.length - 1) return;

    setImg(props.images[i + 1]);
    setLoaded(false);
  };
  const [loaded, setLoaded] = useState(false);
  const prevImage = () => {
    let i = props.images.findIndex((x) => x == img);
    if (i <= 0) return;
    setImg(props.images[i - 1]);
    setLoaded(false);
  };
  const openImage = (image: string) => {
    setImg(image);
    setLoaded(false);
    onOpen();
  };
  return (
    <>
      <Box borderRadius="xl" p="4">
        <Heading>Imagini</Heading>
        <Wrap spacing="0">
          {props.images.map((image, i) => (
            <WrapItem key={i}>
              <Image
                src={image}
                alt=""
                maxH="130"
                onClick={() => openImage(image)}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalCloseButton />
        <ModalContent bgColor="transparent" shadow="none">
          <Center>
            <HStack>
              <Button
                variant="ghost"
                colorScheme="whiteAlpha"
                disabled={img == props.images[0]}
                onClick={prevImage}
              >
                <ArrowLeftIcon />
              </Button>
              {!loaded && (
                <Center>
                  <CircularProgress isIndeterminate size="40vh" />
                </Center>
              )}
              <Image
                src={img}
                alt=""
                h="full"
                maxW="60vw"
                maxH="80vh"
                onLoad={() => setLoaded(true)}
              />
              <Button
                variant="ghost"
                colorScheme="whiteAlpha"
                disabled={img == props.images[props.images.length - 1]}
                onClick={nextImage}
              >
                <ArrowRightIcon />
              </Button>
            </HStack>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImagesCard;
