import { Box, Button, FormControl, FormLabel, Heading, Input, SimpleGrid, Textarea, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Searchbar from '~components/navbar/searchbar'

const SingleSMS = () => {
    const textAreaBg = useColorModeValue('gray','white')
  return (
    <Box>
        <Searchbar w={'500px'} pb={10} placeholder='search by customer name,house number or id'/>
        <Heading pt={4} fontSize={16}>Customer Details</Heading>
        <SimpleGrid py={4} templateColumns={{
            base:'1fr',lg:"1.34fr 1.62fr"
        }}>
        <FormControl>
            <FormLabel fontSize={14} fontWeight='bold'>Customer Name</FormLabel>
            <Input variant={'main'} value="Yaw Mensah" width={'300px'}/>
        </FormControl>
        <FormControl>
            <FormLabel>Customer Phone Number</FormLabel>
            <Input variant={'main'} value="Yaw Mensah" width={'300px'} />
        </FormControl>
        </SimpleGrid>
        <Heading fontSize={16}>Message Area</Heading>
        <SimpleGrid py={4} templateColumns={{
            base:'1fr',lg:"1.34fr 1.62fr"
        }}>
        <FormControl>
            <FormLabel>Message Title</FormLabel>
            <Input variant={'main'} value="Payment is due" width={'300px'} />
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

export default SingleSMS