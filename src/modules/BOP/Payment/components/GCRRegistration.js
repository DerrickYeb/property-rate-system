import { Box, Button, FormControl, FormLabel, Input, Select, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Card from '~components/Card/card'

const GCRRegistration = () => {
    return (
        <Card display="flex" justifyContent="center">
            <SimpleGrid gap={5}
                templateColumns={{ base: '1fr', lg: "1.32fr 1.32fr" }}
                t templateRows={{
                    base: "repeat(3, 1fr)",
                    lg: "1fr",
                }}>
                <FormControl py={2}>
                    <FormLabel>Start</FormLabel>
                    <Input variant={'main'} />
                </FormControl>
                <FormControl py={2}>
                    <FormLabel>Date</FormLabel>
                    <Input type={'date'} variant={'main'} placeholder='Select date' />
                </FormControl>
                <FormControl py={2}>
                    <FormLabel>Name of Collector</FormLabel>
                    <Select variant={'main'} placeholder='select collector'>
                        <option>Ama</option>
                        <option>Ama</option>
                        <option>Ama</option>
                    </Select>
                </FormControl>
            </SimpleGrid>
            <Box py={8} display='flex' justifyContent='center'>
                <Button w={'100%'} maxW="30%" variant={'brand'}>Submit</Button>
            </Box>
        </Card>
    )
}

export default GCRRegistration