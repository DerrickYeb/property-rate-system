import { Box, Button, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { getAxios, postAxios } from 'src/services/services.auth'
import useSWR from 'swr'
import Card from '~components/Card/card'

const AddTown = () => {
    const { register, reset, handleSubmit } = useForm()
    const toast = useToast();
    const [isLoading, setIsloading] = useState(false);

    const { data } = useSWR('apps', getAxios());
    console.log(data)

    const submitRateData = async (data) => {
        setIsloading(true)
        const townData = {
            data: {
                name: data.name,
                app_type_id: 2
            }
        }

        await postAxios('towns', townData).then((response) => {
            setIsloading(false);
            toast({
                title: 'Town data added Successfully',
                description: 'Town data added successfully',
                position: 'top-right',
                duration: 3000,
                status: 'success',
            })
        }).catch((error) => {
            setIsloading(false);
            toast({
                title: 'An error occurred',
                description: 'An error occurred while adding the item',
                position: 'top-right',
                duration: 3000,
                status: 'error',
            })
        })
    }
    return (
        <Card>
           <form onSubmit={handleSubmit(submitRateData)}>
           <FormControl>
                <FormLabel>Name of Town</FormLabel>
                <Input width={'70%'} bg={"#fff"} {...register("name",{required:"Name of town is required"})}/>
            </FormControl>
            <Box py={8} display='flex' justifyContent='center'>
                <Button w={'100%'} type="onSubmit" maxW="40%" variant={'brand'}>Submit</Button>
            </Box>
           </form>
        </Card>
    )
}

export default AddTown