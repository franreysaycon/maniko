import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import TemplateItem from './TemplateItem'
import { v4 as uuidv4 } from 'uuid'

const data = [
  {
    type: 'cash',
    monthHalf: '15th',
    name: 'Lorem Ipsum',
    value: 20000,
  },
  {
    type: 'credit',
    monthHalf: '30th',
    name: 'Lorem Ipsum',
    value: 10000,
  },
  {
    type: 'cash',
    monthHalf: '30th',
    name: 'Lorem Ipsum',
    value: 5000,
  },
  {
    type: 'credit',
    monthHalf: '15th',
    name: 'Lorem Ipsum',
    value: 1000,
  },
  {
    type: 'credit',
    monthHalf: '15th',
    name: 'Lorem Ipsum',
    value: 1000,
  },
  {
    type: 'credit',
    monthHalf: '15th',
    name: 'Lorem Ipsum',
    value: 1000,
  },
  {
    type: 'credit',
    monthHalf: '15th',
    name: 'Lorem Ipsum',
    value: 1000,
  }
]

const Templates = () => (
    <Box h="100%" d="flex" flexDir="column">
        <Text textTransform="uppercase" fontSize="xl" color="white">Templates</Text>
        <Box d="flex" flexDir="column" overflowY="scroll" css={{ 
            '>div': {
                marginBottom: '10px'
            },
            '>div:last-child': {
                marginBottom: 0
            }
        }}>
            {
                data.map( d => <TemplateItem key={uuidv4()} {...d} />)
            }
        </Box>
    </Box>
)

export default Templates
