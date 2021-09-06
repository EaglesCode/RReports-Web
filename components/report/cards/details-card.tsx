import React from "react";
import { Box, Heading, Text, chakra } from "@chakra-ui/react";
import categoryChooser from "../../../libs/category-chooser";

const DetailsCard = (props: {
  category: string;
  description: string;
  status: Number;
}) => {
  const StatusText = () => {
    if (props.status == 0) return <chakra.span>Trimis</chakra.span>;
    if (props.status == 1)
      return <chakra.span color="blue.400">In curs de rezolvare</chakra.span>;
    if (props.status == 2)
      return <chakra.span color="green.400">Rezolvat</chakra.span>;
    if (props.status == 3)
      return <chakra.span color="red.500">In cosul de gunoi</chakra.span>;
  };
  return (
    <Box p="2" maxW="90vw">
      <Heading>Status: {StatusText()}</Heading>
      <Heading>Categorie: {categoryChooser(props.category)}</Heading>
      <Text>
        <b>Descriere: </b>
        {props.description}
      </Text>
    </Box>
  );
};

export default DetailsCard;
