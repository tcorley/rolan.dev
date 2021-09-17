import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Button, Icon, keyframes, Link, Text } from '@chakra-ui/react';
import { IoLogoGoogle } from 'react-icons/io';

// TODO: Add description of page
// Add a google form link

const nameSizes = ['4xl', '6xl'];
const headerLineHeights = ['45px', '65px'];

const hover = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform:  translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Lost: NextPage = () => {
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
        flexDirection="column"
        height="100%"
        minH="100vh"
        textAlign="center"
      >
        <Text
          fontSize={nameSizes}
          fontWeight="bold"
          mx={12}
          animation={`${hover} 5s infinite`}
          lineHeight={headerLineHeights}
        >
          Huzzah! You found this page... and something of mine!!
        </Text>
        <Text>Thank you so much! Please fill out the form below: </Text>
        <Link
          mt={4}
          isExternal
          href="https://docs.google.com/forms/d/e/1FAIpQLSdlfOOCq4JQi4hVbEI0wirvLBb4jhSkCul4RZY7HPSDNpUzQA/viewform?usp=sf_link"
        >
          <Button leftIcon={<Icon as={IoLogoGoogle} />}>Google Form</Button>
        </Link>
      </Box>
    </div>
  );
};

export default Lost;
