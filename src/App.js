import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  Flex,
  Radio,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import SimpleCard from './components/SimpleCard';
import RadioButton from './components/RadioButton';

function App() {
  const data = [{
    questions: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<scripting>", "<javascript>", "<js>"]
    // {
    //   question: "",
    //   a: "<script>",
    //   b: "<scripting>",
    //   c: "<javascript>",
    //   d: "<js>"
    // },
  },
  ]

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack>
            {/* <Logo h="40vmin" pointerEvents="none" /> */}
            {/* <SimpleCard title={data.questions} /> */}
            {data?.map((item, i) => (
              <>
                <SimpleCard key={i} title={item.questions} />
                {/* {item.options.map((items, x) => (
                  <SimpleCard key={x} title={<RadioButton key={x} getValue={(value) => { console.log('bta', value.target.value) }} options={items} />} />
                ))} */}
                <RadioButton options={item.options} />



              </>
            ))}
            {/* <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link> */}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
