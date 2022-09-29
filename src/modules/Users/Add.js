import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Select, SimpleGrid, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { NEW_USER_REGISTRATION_URL } from 'src/config/api.routes.config'
import { postAxios } from 'src/services/services.auth'
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
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true })
  const [checkedItems, setCheckedItems] = useState([false, false])
  const [departmentSelected,setDepartmentSelected] = useState()
  const [genderSelected,setGenderSelected] = useState()


  const submitData = async (data) => {

    const userData = {
      first_name :data.first_name,
      last_name :data.last_name,
      username :data.username,
      email:data.email,
      phone:data.phone,
      password:data.password,
      department:departmentSelected,
      application_access:"all"
    }
    await postAxios(NEW_USER_REGISTRATION_URL, userData).then(response => {
        toast("Added Successfully")
    }).catch(error => {
      toast(error?.message)
    })
    console.log(data)
  }

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  const [data, setData] = useState([
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
  ]);


  return (
    // <DashboardLayout>
    <SimpleGrid templateColumns={{
      base: "1fr",
      lg: "1.23fr 0.4fr",
    }}
      templateRows={{
        base: "repeat(3, 1fr)",
        lg: "1fr 1.34fr",
      }} gap={5}>
      <form onSubmit={handleSubmit(submitData)}>

        <Card px={10}
          w='100%'
        >
          <Flex flexDir={'column'} pb={10} justifyContent='flex-start'>
            <Button variant={'brand'} width='100px'>Back</Button>
          </Flex>
          <SimpleGrid templateColumns={{
            base: "1fr",
            lg: "1.34fr 1.34fr",
          }}
            templateRows={{
              base: "repeat(3, 1fr)",
              lg: "1.34fr 1.34fr",
            }} gap={10}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input {...register("first_name")} variant={'main'} borderColor={'brand.500'} />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input {...register("last_name")} variant={'main'} borderColor={'brand.500'} />
            </FormControl>
            <FormControl py={8}>
          <FormLabel>Gender</FormLabel>
          <Select size='md' variant={'main'} onChange={(e)=> setGenderSelected(e.target.value)}>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </Select>
        </FormControl>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input {...register("username")} variant={'main'}  />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input {...register("email")} variant={'main'}  />
            </FormControl>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input {...register("phone")} variant={'main'}  />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input {...register("password")} variant={'main'} />
            </FormControl>
            {/* <FormControl>
              <FormLabel>Confirm Password</FormLabel>
              <Input  variant={'main'} />
            </FormControl> */}

            <Box py={8} display='flex' justifyContent='center'>
              <Button w={'100%'} type="onSubmit" maxW="40%" variant={'brand'}>Submit</Button>
            </Box>
          </SimpleGrid>
        </Card>

      </form>
      <Card>
        <Heading fontSize={14}>Roles</Heading>
        <FormControl py={8}>
          <FormLabel>Department</FormLabel>
          <Select size='md' variant={'main'} onChange={(e)=> setDepartmentSelected(e.target.value)}>
            <option value='DCE'>DCE</option>
            <option value='DCE'>DCE</option>
            <option value='DCE'>DCE</option>
            <option value='DCE'>DCE</option>
          </Select>
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
              {...register("role")}
              value="all"
              onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
            >
              All
            </Checkbox>
            <Stack pl={6} mt={1} spacing={5}>
              <Checkbox
                me='16px' defaultChecked colorScheme='brandScheme'
                isChecked={checkedItems[0]}
                value="propertyRate"
                onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
              >
                Property Rate
              </Checkbox>
              <Checkbox
                me='16px' defaultChecked colorScheme='brandScheme'
                isChecked={checkedItems[1]}
                value="bop"
                onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
              >
                Building Permit Payment
              </Checkbox>
            </Stack>
          </>
          {/* ))
          } */}

        </FormControl>
      </Card>
    </SimpleGrid>
    // </DashboardLayout>
  )
}
export default AddUser;