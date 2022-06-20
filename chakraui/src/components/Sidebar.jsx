
import React from "react";

import { Text } from "@chakra-ui/react"
import {Div ,Img} from "./Sidebar.style"

import { Button,useDisclosure } from "@chakra-ui/react";
import home from "./icons/home.png"
import explore from "./icons/explore.png"
import settings from "./icons/settings.png";
import star from "./icons/star.png";
import trend from "./icons/trend.png";

const Sidebar = () => {
 
  return (
    <Text bg="rgb(237,242,247)">
    <Div>
        <Text bg="rgb(255,255,255)" h="100%">
        <Text  fontWeight="semibold" textAlign="left" ml={10} fontSize={30} >
        Logo
            </Text>
        <Button borderRadius="12" _focus={{ boxShadow: "none" }}  _hover={{ bg: "rgb(11,197,234)" }}  bg="rgb(255,255,255)" p={7} mb={2} w="90%">
          <Img src={home} width="20px" mr={10} /> Home
        </Button>
        <Button borderRadius="12" _focus={{ boxShadow: "none" }}  _hover={{ bg: "rgb(11,197,234)" }} p={7} mb={2} bg="rgb(255,255,255)"  w="90%" > 
          <Img src={trend} bg="rgb(255,255,255)" width="20px"  />
          Trending
        </Button>

        <Button borderRadius="12" _focus={{ boxShadow: "none" }}  _hover={{ bg: "rgb(11,197,234)" }} bg="rgb(255,255,255)" p={7} mb={2} w="90%">
          <Img src={explore} width="20px"  /> Explore
        </Button>

        <Button borderRadius="12" _focus={{ boxShadow: "none" }}  _hover={{ bg: "rgb(11,197,234)" }} bg="rgb(255,255,255)" p={7} mb={2}  w="90%"> 
          <Img src={star} width="20px"  />
          Favourites
        </Button>

        <Button borderRadius="12" _focus={{ boxShadow: "none" }}  _hover={{ bg: "rgb(11,197,234)" }} bg="rgb(255,255,255)"  p={7} mb={2}  w="90%" >
          <Img src={settings} width="20px" />
          Settings
        </Button>
        </Text>
    </Div>
    </Text>
 
  );
};

export default Sidebar;

