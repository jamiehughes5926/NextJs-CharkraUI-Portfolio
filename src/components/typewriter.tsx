import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Text } from "@chakra-ui/react";

type Props = {};

export default function TypeWriter({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Jamie Hughes", "<h1>Jamie<h1/>"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <Text fontSize={{ base: "5xl" }}>
        {text}
        <Cursor cursorColor="#F7AB01" />
      </Text>
    </div>
  );
}
