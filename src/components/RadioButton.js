import { Card, CardBody, Radio, RadioGroup } from '@chakra-ui/react'
import React, { useState } from 'react'
import SimpleCard from './SimpleCard'


const RadioButton = ({ options, getValue }) => {
    const [value, setValue] = useState('1')
    return (
        <>
            {options.map((opt, i) => (
                <>
                    <SimpleCard title={
                        <RadioGroup onChange={setValue} value={value}>
                            <Radio key={i} value={opt}>{opt}</Radio>
                        </RadioGroup>} />
                </>
            ))
            }
            {/* <Radio onChange={(value) => getValue(value)} colorScheme='red' value={options} isRequired={true} isFocusable={true} >
                {options}
             </Radio> */}

        </>
    )
}

export default RadioButton
