import { Box, Button, FormControl, FormLabel, Input, SimpleGrid, useToast } from '@chakra-ui/react'
import { Card } from '@mantine/core'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Select from 'react-select'
import { getAxios, postAxios } from 'src/services/services.auth'
import useSWR from 'swr'

const NewRate = () => {
    const {register,reset,handleSubmit} = useForm()
    const toast = useToast();
    const[isLoading,setIsloading] = useState(false);

    const { data } = useSWR('apps', getAxios);
    console.log(data)

    const submitRateData = async(data) => {
        setIsloading(true)
        const rateData = {
            data:{
                name: data.name,
                amount: data.amount,
                app_type_id: 2
            }
        }
        
        await postAxios('rates',rateData).then((response)=>{
            setIsloading(false);
            toast({
                title: 'Rate data added Successfully',
                description: 'Rate data added successfully',
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
        <Card height={300}>
            <form onSubmit={handleSubmit(submitRateData)}>
            <SimpleGrid columns={1} gap={4} px={10}>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input {...register('name',{required:"Rate name is required"})} width={'50%'} bg="#fff" />
                </FormControl>
                <FormControl>
                    <FormLabel>Amount</FormLabel>
                    <Input {...register("amount")} width={'50%'} type='number' bg="#fff" />
                </FormControl>
                <FormControl width={'50%'}>
                    <FormLabel>Rate Type</FormLabel>
                    <Select {...register('app_type_id')} size='md' options={
                        data?.data.map((item) =>(
                               {
                                value: item.id,
                                label:item.attributes?.name
                               }
                        ))
                    } />
                </FormControl>
                {/* <FormControl>
            <FormLabel>Name</FormLabel>
            <Input width={'50%'} bg="#fff"/>
        </FormControl> */}
            </SimpleGrid>
            <Box py={8} display='flex' justifyContent='center'>
                <Button w={'100%'} type="onSubmit" maxW="40%" variant={'brand'}>Submit</Button>
            </Box>
            </form>
           
        </Card>
    )
}

export default NewRate