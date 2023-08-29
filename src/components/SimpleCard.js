import { Card, CardBody, Text } from '@chakra-ui/react'
import React from 'react'

const SimpleCard = ({ title }) => {
    return (
        <Card>
            <CardBody>
                <Text>{title}</Text>
            </CardBody>
        </Card>
    )
}

export default SimpleCard
