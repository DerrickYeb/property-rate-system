import { Box, Button, FormControl, FormLabel, Input, Select, SimpleGrid, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { postAxios } from 'src/services/services.auth'
import Card from '~components/Card/card'

const NewPropertyRate = () => {

    const { register,handleSubmit } = useForm()

    const submitData = async(data) =>{
        const propertyData = {
            data:{
            owner_name:data.owner_name,
            house_number:data.house_number,
            phone_number:data.phone_number,
            amount:data.amount,
            arrears:data.arrears,
            town:data.town,
            street_name:data.street_name,
            gps_address:data.gps_address,
            business_description:data.business_description,
            }
        }
        await postAxios('properties',propertyData).then((response) =>{
            toast(response.message)
        }).catch((error) => {
            toast(error.message)
        });
        console.log(data)
    }

    return (
        <Card py={5}>
            <form onSubmit={handleSubmit(submitData)}>
            <SimpleGrid templateColumns={{
                base: "1fr",
                lg: "1.23fr 1.23fr",
            }}
                templateRows={{
                    base: "repeat(3, 1fr)",
                    lg: "1fr 1.34fr",
                }} gap={5}
                columnGap={5} rowGap={2}>
                <FormControl>
                    <FormLabel>Owner&apos;s Name</FormLabel>
                    <Input {...register("owner_name")} variant={'main'} borderColor={'brand.500'} />
                </FormControl>
                <FormControl>
                    <FormLabel>House Number</FormLabel>
                    <Input {...register("house_number")} variant={'main'} borderColor={'brand.500'} />
                </FormControl>
                <FormControl>
                    <FormLabel>Telephone Number</FormLabel>
                    <Input {...register("phone_number")} variant={'main'} borderColor={'brand.500'} />
                </FormControl>
                <FormControl>
                    <FormLabel>Amount</FormLabel>
                    <Select variant={'main'} {...register("amount")}>
                        <option value='200'>3 bedrooms</option>
                        <option value='400'>4 bedrooms</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Arrears</FormLabel>
                    <Input {...register("arrears")} variant={'main'} borderColor={'brand.500'} />
                </FormControl>
                <FormControl>
                    <FormLabel>Town</FormLabel>
                    <Select s variant={'main'} {...register("town")}>
                        <option value='200'>Accra</option>
                        <option value='400'>Kumasi</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Street Name/Landmark</FormLabel>
                    <Input {...register("street_name")} variant={'main'} borderColor={'brand.500'} />
                </FormControl>
                <FormControl>
                    <FormLabel>GPS Address</FormLabel>
                    <Input {...register("gps_address")} variant={'main'} borderColor={'brand.500'} />
                </FormControl>
                <FormControl>
                    <FormLabel>Business Description</FormLabel>
                    <Textarea {...register("business_description")}  borderColor={'brand.500'} />
                </FormControl>
            </SimpleGrid>
            <Box py={8} display='flex' justifyContent='center'>
                <Button w={'100%'} type="onSubmit" maxW="40%" variant={'brand'}>Submit</Button>
            </Box>
            </form>
        </Card>
    )
}

export default NewPropertyRate