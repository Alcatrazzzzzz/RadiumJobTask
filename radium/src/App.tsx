import React, { KeyboardEvent, useEffect, useState } from "react";
import { Flex, Text, Icon, Button } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FaSadCry } from "react-icons/fa";
import "./App.css";

const MotionFlex = motion(Flex);
const MotionIcon = motion(Icon);

const App = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInvisible, setIsInvisible] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  function handleKeyPress(e: globalThis.KeyboardEvent) {
    console.log(e);
    if (e.code === "Space") {
      setIsDeleted(true);
    }
  }

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
  }, []);

  return (
    <Flex
      w="100%"
      h="40vh"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      {isDeleted ? (
        <Flex flexDir="column" alignItems="center">
          <Text textAlign="center" w="60%" fontWeight="bold" fontSize="24px">
            О нет вы удалили всю информацию обо мне, и ее теперь не вернуть
          </Text>
          <MotionFlex
            animate={{ rotate: [0, -40, 40, 0], transition: { delay: 0.5 } }}
            initial={{ rotate: 0 }}
          >
            <Icon w="40px" h="40px" mt="20px" as={FaSadCry} />
          </MotionFlex>
        </Flex>
      ) : (
        <a
          style={{ color: "inherit", textDecoration: "none" }}
          href="https://hh.ru/resume/40b39378ff092690cc0039ed1f5776456e6d63"
        >
          <MotionFlex
            position="relative"
            cursor="pointer"
            onMouseOver={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            whileHover={{ scale: 1.2 }}
            animate={{ opacity: isInvisible ? 0 : 1 }}
            alignItems="center"
            flexDirection="column"
          >
            <Text mb="10px" fontWeight="bold" fontSize="24px">
              Новиков Вадим Сергеевич
            </Text>
            <Text
              transition="1s"
              transitionDelay="0.2s"
              color={isHovered ? "#00b99a" : "#000000"}
              margin="0px 0px 0px 0px"
            >
              Начинающий web-программист / Junior Frontend Developer
            </Text>
            <AnimatePresence>
              {isHovered ? (
                <MotionFlex
                  right={"0px"}
                  top={"-24px"}
                  position="absolute"
                  flexDirection="column"
                  alignItems="center"
                  initial={{
                    opacity: 0,
                    x: 0,
                    y: -10,
                    rotate: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: 10,
                    rotate: 50,
                    transition: { delay: 0.5 },
                  }}
                  exit={{ opacity: 0, x: 0, y: -10, rotate: 30 }}
                >
                  <Text my={0}>Click me</Text>
                  <Icon w="20px" h="20px" as={AiOutlineArrowDown} />
                </MotionFlex>
              ) : null}
            </AnimatePresence>
          </MotionFlex>
        </a>
      )}
      <Flex mt="50px">
        <Button
          opacity={isDeleted ? 0 : 1}
          bgColor="black"
          color="white"
          transition="0.5s"
          _hover={{ backgroundColor: "#00b99a" }}
          onClick={() => setIsInvisible(!isInvisible)}
        >
          {isInvisible ? "Show text" : "Hide text"}
        </Button>
      </Flex>
    </Flex>
  );
};

export default App;
