import { Button } from '@chakra-ui/react'
import React from 'react'


const SimpleButton = ({ title, onClick }) => {
    return (
        <Button onClick={onClick} colorScheme='teal' variant='solid'>
            {title}
        </Button>
    )
}

export default SimpleButton
