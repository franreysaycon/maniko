import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const TemplateItem = ({ type, monthHalf, name, value }) => (
    <Box d="flex" flexDir="column" p="10px" borderRadius="10px" bgColor="white" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
        <Box d="flex" justifyContent="space-between">
            <Text color="blue.100" fontSize="sm" textTransform="uppercase" fontWeight="bold">{type}</Text>
            <Text color="violet.100" fontSize="sm" textTransform="uppercase" fontWeight="bold">after {monthHalf}</Text>
        </Box>
        <Box d="flex">
            <Box d="flex" flexDir="column">
                <Text textTransform="uppercase">{name}</Text>
                <Text fontWeight="bold" color="red.100">PHP {value}</Text>
            </Box>
        </Box>
    </Box>
)

export default TemplateItem
