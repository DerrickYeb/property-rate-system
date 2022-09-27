import { Box, Button, FormControl, FormLabel, Input, Select, SimpleGrid, Textarea, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const BulkSMS = () => {
    const textAreaBg = useColorModeValue('gray','white')

  return (
    <Box>
        <SimpleGrid py={4} templateColumns={{
            base:'1fr',lg:"1.34fr 1.62fr"
        }} gap={10}>
        <FormControl>
            <FormLabel>Select Town</FormLabel>
            <Select  width={{base:"200px",lg:"400px"}}>
                <option>All Towns</option>
                <option>Accra</option>
                <option>Kibi</option>
            </Select>
        </FormControl>
        <FormControl>
            <FormLabel>Select Rate</FormLabel>
            <Select width={{base:"200px",lg:"400px"}}>
                <option>All Rate</option>
                <option>0.3</option>
                <option>01.2%</option>
            </Select>
        </FormControl>
        <FormControl>
            <FormLabel>Message Title</FormLabel>
            <Input variant={'main'} value="Payment is due" width={'400px'} />
        </FormControl>
        <FormControl>
            <FormLabel>Message Content</FormLabel>
            <Textarea bg={textAreaBg} color="black" variant={'main'} value="Payment is due" width={'500px'} />
        </FormControl>
        </SimpleGrid>
        <Box py={8} display='flex' justifyContent='center'>
        <Button w={'100%'} maxW="30%" variant={'brand'}>Send SMS</Button>
      </Box>
    </Box>
  )
}

export default BulkSMS