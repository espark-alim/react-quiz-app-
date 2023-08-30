import { Box, Card, CardBody, Flex, HStack, Radio, RadioGroup, SimpleGrid, flexbox } from '@chakra-ui/react'
import React, { useState } from 'react'

const RadioButton = ({ getValue, question }) => {

    const [value, setValue] = useState('')

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setValue(selectedValue);
        getValue(selectedValue); // Notify parent about the selected value

    };
    return (
        <>


            {/* <input type="radio" checked={value == options} name={value} value={options} onChange={(e) => handleChange(e)} /> {options} */}
            {/* <input type="radio" name={value === options} checked={value === options} value={options} onChange={(e) => handleChange(e)} />{options} */}


            <RadioGroup defaultValue={null}>
                {question.options.map((option, index) => (
                    <Card mt={3}>
                        <CardBody>
                            <Radio key={index} value={option} onChange={(e) => handleChange(e)}>
                                {option}
                            </Radio>
                        </CardBody>
                    </Card>
                ))}
            </RadioGroup>


        </>
    )
}

export default RadioButton
