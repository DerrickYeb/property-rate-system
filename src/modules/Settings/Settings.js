import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Editable, EditableInput, EditablePreview, Flex, FormControl, FormLabel, HStack, IconButton, Input, SimpleGrid, Textarea, useEditableControls } from '@chakra-ui/react'
import React from 'react'
import Card from '~components/Card/card'

const Settings = () => {
  return (
    <Flex justifyContent={'center'}>
      <Card px={20}>
        <SimpleGrid
          templateColumns={{
            base: "1fr",
            lg: "1fr",
          }}
          templateRows={{
            base: "repeat(3, 1fr)",
            lg: "1fr",
          }}>
          <FormControl py={3}>
            <HStack columnGap={10}>
              <FormLabel>Assemble Name</FormLabel>
              <Input variant='main' width={{ base: "100%", lg: "600px" }} />
            </HStack>
          </FormControl>
          <FormControl py={3}>
            <HStack columnGap={20}>
              <FormLabel>Rate Impost</FormLabel>
              <Input width={{ base: "100%", lg: "600px" }} variant="main" />
            </HStack>
          </FormControl>
          <FormControl py={3}>
            <HStack>
              <FormLabel>Telephone Number 1</FormLabel>
              <Input width={{ base: "100%", lg: "600px" }} variant="main" />
            </HStack>
          </FormControl>
          <FormControl py={3}>
            <HStack>
            <FormLabel>Telephone Number 2</FormLabel>
            <Input width={{ base: "100%", lg: "600px" }} variant="main" />
            </HStack>
          </FormControl>
          <FormControl py={3}>
            <HStack>
              <FormLabel>Telephone Number 3</FormLabel>
              <Input width={{ base: "100%", lg: "600px" }} variant="main" />
            </HStack>
          </FormControl>
          <FormControl py={3}>
            <HStack>
              <FormLabel>Last Date for Payment</FormLabel>
              <Input width={{ base: "100%", lg: "600px" }} variant="main" />
            </HStack>
          </FormControl>
          <FormControl py={3}>
            <HStack>
              <FormLabel>Printed Date</FormLabel>
              <Input width={{ base: "100%", lg: "600px" }} variant="main" />
            </HStack>
          </FormControl>
          <FormControl py={3}>
            <HStack columnGap={10}>
              <FormLabel>Receipt Description</FormLabel>
              <Textarea size={'lg'} width={{ base: "100%", lg: "600px" }} variant="main" />
            </HStack>
          </FormControl>
          <FormControl py={3}>
            <HStack columnGap={20}>
              <FormLabel>Receipt N.B</FormLabel>
              <Textarea width={{ base: "100%", lg: "600px" }} variant="main" size={'lg'} />
            </HStack>
          </FormControl>
        </SimpleGrid>
        <Box py={8} display='flex' justifyContent='center'>
          <Button w={{ base: "300px", lg: "100%" }} maxW="30%" variant={'brand'}>Update</Button>
        </Box>
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