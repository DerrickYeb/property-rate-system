import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Flex, FormControl, FormLabel, HStack, IconButton, Input, SimpleGrid, Textarea, useEditableControls } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { getAxios, putAxios } from 'src/services/services.auth'
import useSWR from 'swr'
import Card from '~components/Card/card'

const Settings = () => {

  const {register, handleSubmit} = useForm()

  const {data:v} = useSWR('setting',getAxios)
  console.log(v?.data)

  const submitUpdate = async(data) =>{

    const updateData = {
      data:{
        data
      }
    }
    await putAxios('setting',updateData).then(()=>{
      toast("Settings updated successfully",toast.success)
    }).catch((error)=>{
      toast(error.message,toast.error)
    })
    console.log(data)
  }

  return (
    <Flex justifyContent={'center'}>
      <Card px={20}>
      <FormLabel>Settings</FormLabel>
       <form onSubmit={handleSubmit(submitUpdate)}>
       <SimpleGrid
          templateColumns={{
            base: "1fr",
            lg: "1.24fr 1.24fr",
          }}
          templateRows={{
            base: "repeat(3, 1fr)",
            lg: "1fr",
          }}>
          <FormControl py={3}>
              <FormLabel>Assemble Name</FormLabel>
              <Input {...register('district_name')} variant='main' defaultValue={v?.data?.attributes.district_name}  width={{ base: "100%", lg: "600px" }} />
          </FormControl>
          <FormControl py={3}>
              <FormLabel>Rate Impost</FormLabel>
              <Input {...register('rate_impost')} value={v?.data?.attributes.rate_impost} width={{ base: "100%", lg: "600px" }} variant="main" />
          </FormControl>
          <FormControl py={3}>
              <FormLabel>Telephone Number 1</FormLabel>
              <Input {...register('telephone_1')} value={v?.data?.attributes.telephone_1} width={{ base: "100%", lg: "600px" }} variant="main" />
          </FormControl>
          <FormControl py={3}>
            <FormLabel>Telephone Number 2</FormLabel>
            <Input {...register('telephone_2')} value={v?.data?.attributes.telephone_2} width={{ base: "100%", lg: "600px" }} variant="main" />
          </FormControl>
          <FormControl py={3}>
              <FormLabel>Telephone Number 3</FormLabel>
              <Input {...register('telephone_3')} value={v?.data?.attributes.telephone_3 || 'not available'} width={{ base: "100%", lg: "600px" }} variant="main" />
          </FormControl>
          <FormControl py={3}>
              <FormLabel>Last Date for Payment</FormLabel>
              <Input {...register('payment_date')} value={v?.data?.attributes.payment_date} width={{ base: "100%", lg: "600px" }} variant="main" />
          </FormControl>
          <FormControl py={3}>
              <FormLabel>Printed Date</FormLabel>
              <Input type={'date'} {...register('printed_date')} value={v?.data?.attributes.printed_date} width={{ base: "100%", lg: "600px" }} variant="main" />
          </FormControl>
          <FormControl py={1}>
              <FormLabel>Receipt Description</FormLabel>
              <Textarea {...register('receipt_description')} fontSize={13} value={v?.data?.attributes.receipt_description} size={'lg'} width={{ base: "100%", lg: "600px" }} border={'1px solid #E0E5F2'} variant="main" />
          </FormControl>
          <FormControl py={2}>
              <FormLabel>Receipt N.B</FormLabel>
              <Textarea {...register('receipt_note')} fontSize={13} value={v?.data?.attributes.receipt_note} width={{ base: "100%", lg: "600px" }} border={'1px solid #E0E5F2'} variant="main" size={'lg'} />
          </FormControl>
        </SimpleGrid>
        <Box py={8} display='flex' justifyContent='center'>
          <Button w={{ base: "500px", lg: "100%" }} type='onSubmit' maxW="30%" variant={'brand'}>Update</Button>
        </Box>
       </form>
      </Card>
    </Flex>
  )
}

function EditableControls() {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls()

  return isEditing ? (
    <ButtonGroup justifyContent='space-evenly' size='sm'>
      <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
      <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
    </ButtonGroup>
  ) : (
    <Flex justifyContent='space-evenly'>
      <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
    </Flex>
  )
}

export default Settings