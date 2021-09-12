import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Text } from '@chakra-ui/react';

// TODO: Add description of page
// Add a google form link

const nameSizes = ['4xl', '6xl'];

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
        height="100%"
        minH="100vh"
      >
        <Text fontSize={nameSizes}>You found me.</Text>
      </Box>
    </div>
  );
};

export default Lost;
