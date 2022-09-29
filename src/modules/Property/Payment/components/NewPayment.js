import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { Input, Select } from '@mantine/core'
import React from 'react'
import Card from '~components/Card/card'

const NewPayment = () => {
  return (
    <Card>
        <Box>
            <Select label="Select Customer Name"
            data={[]} width={{base:"100px",lg:'200px'}} style={{
                width:'400px'
            }} withAsterisk/>
            <Select label="Enter GCR Number"
            data={[]} width={"300px"} style={{
                width:'400px'
            }}/>
            <Text pb={2} pt={5}>Customer Details</Text>
            <SimpleGrid columns={2} gap={4}>
                <Box rowGap={6}>
                <Text>Name</Text>
                <Text>Yaw Mensah</Text>
                </Box>
                <Box>
                <Text>Yaw Mensah</Text>
                <Text>Yaw Mensah</Text>
                </Box>
                <Box>
                <Text>Yaw Mensah</Text>
                <Text>Yaw Mensah</Text>
                </Box>
                <Box>
                <Text>Yaw Mensah</Text>
                <Text>Yaw Mensah</Text>
                </Box>
            </SimpleGrid>
            <Text>Payment History</Text>

        </Box>
    </Card>
  )
}

export default NewPayment