import Icon from "@chakra-ui/icon";
import {
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
} from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = (props: InputGroupProps) => {
  return (
    <Flex {...props}>
      <InputGroup bgColor="#EEEEEE" borderRadius="14">
        <InputLeftElement pointerEvents="none">
          <BiSearch color="gray.300" />
        </InputLeftElement>
        <Input placeholder="Cauta sesizari" />
      </InputGroup>
    </Flex>
  );
};

export default Search;
