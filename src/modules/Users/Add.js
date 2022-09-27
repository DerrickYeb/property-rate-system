import { Box, Button, Checkbox, CheckboxGroup, Container, Flex, FormControl, FormLabel, HStack, Input, SimpleGrid, Stack, VStack } from '@chakra-ui/react'
import { Select } from '@mantine/core'
import React, { useState } from 'react'
import Card from '~components/Card/card'

const checkboxData = [
  {
    id: 1,
    value: 'All',
    name: 'All',
  },
  {
    id: 2,
    value: "PR",
    name: "Only Property Rate"
  },
  {
    id: 3,
    value: "BP",
    name: "Only Building Permit"
  }
]

const AddUser = () => {
  const [checkedItems, setCheckedItems] = useState([false, false])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  const [data, setData] = useState([
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
  ]);


  return (
    // <DashboardLayout>
    <Card px={10}
      w='100%'>
      <Flex flexDir={'column'} pb={10} justifyContent='flex-start'>
        <Button variant={'brand'} width='100px'>Back</Button>
      </Flex>
      <SimpleGrid templateColumns={{
        base: "1fr",
        lg: "1.34fr 1.62fr",
      }}
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }} gap={10}>
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input variant={'main'} placeholder='Enter full name here' />
        </FormControl>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input variant={'main'} placeholder='Enter username here' />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input variant={'main'} placeholder='Enter your email' />
        </FormControl>
        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <Input variant={'main'} placeholder='Enter phone number' />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input variant={'main'} placeholder='Enter password' />
        </FormControl>
        <FormControl>
          <FormLabel>Department</FormLabel>
          {/* <Select variant={'main'}>
            <option value='DCE'>DCE</option>
          </Select> */}
          <Select
            data={data}
            placeholder="Select items"
            nothingFound="Nothing found"
            searchable
            creatable
            getCreateLabel={(query) => `+ Create ${query}`}
            onCreate={(query) => {
              const item = { value: query, label: query };
              setData((current) => [...current, item]);
              return item;
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Application Access</FormLabel>
          {/* {
            checkboxData.map((role) => ( */}
          <>
            <Checkbox
             me='16px' defaultChecked colorScheme='brandScheme'
              isChecked={allChecked}
              isIndeterminate={isIndeterminate}
              onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
            >
              All
            </Checkbox>
            <Stack pl={6} mt={1} spacing={1}>
              <Checkbox
               me='16px' defaultChecked colorScheme='brandScheme'
                isChecked={checkedItems[0]}
                onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
              >
                Property Rate
              </Checkbox>
              <Checkbox
               me='16px' defaultChecked colorScheme='brandScheme'
                isChecked={checkedItems[1]}
                onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
              >
                Building Permit Payment
              </Checkbox>
            </Stack>
          </>
          {/* ))
          } */}

        </FormControl>
      </SimpleGrid>
      <Box py={8} display='flex' justifyContent='center'>
        <Button w={'100%'} maxW="30%" variant={'brand'}>Submit</Button>
      </Box>
    </Card>
    // </DashboardLayout>
  )
}
export default AddUser;