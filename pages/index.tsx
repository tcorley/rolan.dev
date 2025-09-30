import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Box,
  Flex,
  HStack,
  Text,
  SlideFade,
  Fade,
  Icon,
  Link,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io';
import { TargetAndTransition } from 'framer-motion';

// TODO: Proper meta tags

const nameSizes = ['4xl', '6xl'];
const iconSizeProps = {
  w: [5, 8],
  h: [5, 8],
};
const textTransition: TargetAndTransition = { skew: 8, translateY: -10 };

const hueRotate = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(-360deg);
  }
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>rolan.dev</title>
        <meta name="description" content="Tyler's Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        minH="100vh"
      >
        <Flex flexDir="column" alignItems="center">
          <HStack>
            <SlideFade
              in
              offsetY="20px"
              delay={0.5}
              whileHover={textTransition}
              whileTap={textTransition}
            >
              <Text fontSize={nameSizes}>Tyler</Text>
            </SlideFade>
            <SlideFade
              in
              offsetY="20px"
              delay={1}
              whileHover={textTransition}
              whileTap={textTransition}
            >
              <Text
                fontSize={nameSizes}
                bgGradient="linear-gradient(109deg, rgba(191,87,0,1) 0%, rgba(229,50,56,1) 22%, rgba(40,103,178,1) 100%)"
                bgClip="text"
                fontWeight="bold"
                animation={`${hueRotate} 10s infinite linear`}
              >
                Rolan
              </Text>
            </SlideFade>
            <SlideFade
              in
              offsetY="20px"
              delay={1.5}
              whileHover={{ skew: 8, translateY: -10 }}
              whileTap={textTransition}
            >
              <Text fontSize={nameSizes}>Corley</Text>
            </SlideFade>
          </HStack>
          <Fade in delay={2}>
            <Text px={8} textAlign="center">
              Software Engineer @ LinkedIn. Figuring it out as I go along.
            </Text>
          </Fade>
          <Fade in delay={2}>
            <HStack mt={4}>
              <Link isExternal href="https://linkedin.com/in/tcorley">
                <Icon as={IoLogoLinkedin} {...iconSizeProps} />
              </Link>
              <Link isExternal href="https://instagram.com/_corley_">
                <Icon as={IoLogoInstagram} {...iconSizeProps} />
              </Link>
              <Link isExternal href="https://github.com/tcorley">
                <Icon as={IoLogoGithub} {...iconSizeProps} />
              </Link>
            </HStack>
          </Fade>
        </Flex>
      </Box>
    </div>
  );
};

export default Home;
