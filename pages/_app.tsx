import { ChakraProvider } from '@chakra-ui/react';

function RolanDev({ Component, pageProps }: any) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default RolanDev;
