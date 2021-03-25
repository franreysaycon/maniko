import { Box, Text, FormControl, Select, FormLabel, Input, FormHelperText, Button } from '@chakra-ui/react'
import { navigate } from 'gatsby-link'
import months from 'months'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useManikoStore } from './ManikoProvider'

const MonthCreate = () => {
    const { updateTrack, trackIsReady } = useManikoStore()
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => {
      updateTrack(data)
    }
    const today = new Date()

    useEffect(() => {
        if(trackIsReady){
            navigate('/')
        }
    }, [trackIsReady])

    return (
    <Box h="100%" d="flex" flexDir="column">
        <Text textTransform="uppercase" color="white" mb="15px" fontSize="xl">Create a new track</Text>
        <Box d="flex" flexDir="row" mb="15px">
            <Box d="flex" flex="1" mr="15px">
                <FormControl id="month">
                    <FormLabel textTransform="uppercase" color="white">Month</FormLabel>
                    <Select bgColor="white" name="month" ref={register({ required: true })}>
                        {
                            months.abbr.map( month => <option key={month}>{month}</option>)
                        }
                    </Select>
                </FormControl>
            </Box>
            <Box d="flex" flex="1">
                <FormControl id="year">
                    <FormLabel textTransform="uppercase" color="white">Year</FormLabel>
                    <Input type="number" name="year" bgColor="white" ref={register} value={today.getFullYear()} contentEditable={false} />
                </FormControl>
            </Box>
        </Box>
        <Box d="flex" mb="15px">
            <FormControl id="after30thSalary">
                <FormLabel textTransform="uppercase" color="white">after 30th salary</FormLabel>
                <Box d="flex">
                    <Box
                        d="flex"
                        bgColor="blue.100"
                        color="white"
                        pl="15px"
                        pr="15px"
                        alignItems="center"
                        borderLeftRadius="5px"
                    >PHP</Box>
                    <Input type="number" name="after30thSalary" bgColor="white" borderLeftRadius="0px" ref={register({ required: true, min: 1 })} />
                </Box>
                {errors.after30thSalary && <FormHelperText color="red.300">Salary should be greater than 0.</FormHelperText> }
            </FormControl>
        </Box>
        <Box d="flex" mb="30px">
            <FormControl id="after15thSalary">
                <FormLabel textTransform="uppercase" color="white">after 15th salary</FormLabel>
                <Box d="flex">
                    <Box
                        d="flex"
                        bgColor="blue.100"
                        color="white"
                        pl="15px"
                        pr="15px"
                        alignItems="center"
                        borderLeftRadius="5px"
                    >PHP</Box>
                    <Input type="number" name="after15thSalary" bgColor="white" borderLeftRadius="0px" ref={register({ required: true })} />
                </Box>
                {errors.after15thSalary && <FormHelperText color="red.300">Salary should be greater than 0.</FormHelperText> }
            </FormControl>
        </Box>
        <Box d="flex" alignItems="flex-end" justifyContent="center" height="100%">
            <Button bgColor="red.100" pl="80px" pr="80px" borderRadius="30px" color="white" textTransform="uppercase" onClick={handleSubmit(onSubmit)}>create</Button>
        </Box>
    </Box>
    )
}

export default MonthCreate
