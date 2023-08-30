import React, { useState } from 'react';
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
  HStack,
  Stack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import SimpleCard from './components/SimpleCard';
import RadioButton from './components/RadioButton';
import SimpleButton from './components/SimpleButton';

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedValue, setSelectedValue] = useState('');
  const data = [{
    questions: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<scripting>", "<javascript>", "<js>"],
    rightAns: "<script>"
  },
  {
    questions: "Where is the correct place to insert a JavaScript?",
    options: [" Both the <head> section and the <body> section are correct", " The <body> section", " The <head> section"],
    rightAns: "<script>"
  },
  {
    questions: "The external JavaScript file must contain the <script> tag.",
    options: ["True", "False"],
    rightAns: "<script>"
  },
  {
    questions: "How do you write 'Hello World' in an alert box?",
    options: [" alertBox('Hello World')", " msg('Hello World');", " msgBox('Hello World');", " alert('Hello World');"],
    rightAns: "<script>"
  },
  {
    questions: "How do you create a function in JavaScript?",
    options: [" function myFunction()", "  function = myFunction()", "  function:myFunction()",],
    rightAns: "<script>"
  }
  ]
  const question = data[currentQuestion]

  const hendlePrevious = () => {
    if (currentQuestion === 0) {
      return null
    }
    else {
      setCurrentQuestion(currentQuestion - 1)
    }
  }
  const hendleNext = () => {
    if (currentQuestion === data.length - 1) {
      return null
    }
    else {
      setCurrentQuestion(currentQuestion + 1)
    }

  }
  const handleRadioValueChange = (value) => {
    setSelectedValue(value);
    console.log(value, "ok")
  };

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={10}>
            <SimpleCard title={question.questions} />
            <Stack>
              {/* {question.options.map((option) =>
              (
                <RadioButton key={option} options={option} getValue={handleRadioValueChange} />
              ))} */}
              <RadioButton question={question} />
            </Stack>
            <HStack justifyContent={'space-between'} w={'17%'}>
              <SimpleButton title={"Previous"} onClick={hendlePrevious} />
              <SimpleButton title={"Next"} onClick={hendleNext} />
            </HStack>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
