import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import Card from '~components/Card/card'

const AddTown = () => {
  return (
    <Card>
        <FormControl>
            <FormLabel>Name of Town</FormLabel>
            <Input width={'70%'} bg={"#fff"}/>
        </FormControl>
    </Card>
  )
}

export default AddTown