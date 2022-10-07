import { Box, Button, FormControl, FormLabel, Input, Select, SimpleGrid, Textarea, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { getAxios, postAxios } from 'src/services/services.auth'
import Card from '~components/Card/card'

const NewPropertyRate = () => {

    const { register, handleSubmit,reset,setFocus } = useForm()
    const toast = useToast();
    const[dataFetched,setFetchData] = useState([]);
    const [isLoading,setIsloading] = useState(false)

    function makeid(customerTown) {
        var text = customerTown;
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
      }
      
      console.log(makeid());


    const fetchData = () => {
        getAxios('properties').then((response) => {
            setFetchData(response)
        }).catch((err) =>{});
    }
   useEffect(() =>{
    fetchData();
   },[])

    const verify = (house_number,phone_number)=>{
      let resp =  dataFetched.data.forEach((res)=>{
            return house_number == res.attributes.house_number || phone_number == res.attributes.phone_number;
        })
        // setIsloading(false)
        console.log("hmm",resp)
        return resp;
    }

    const submitData = async (data) => {
        setIsloading(true);
      let response =  verify(data.house_number,data.phone_number);
      console.log("Verification",response)
    let propertyId = makeid(data.town)
      const propertyData = {
        data: {
            owner_name: data.owner_name,
            house_number: data.house_number,
            phone_number: data.phone_number,
            amount: data.amount,
            arrears: data.arrears,
            town: data.town,
            street_name: data.street_name,
            gps_address: data.gps_address,
            business_description: data.business_description,
            property_id:propertyId
        }
    }

        if(response){
            setFocus("phone_number",{shouldSelect:true})
            setFocus("house_number",{shouldSelect:true})
        }
        else{
            await postAxios('properties', propertyData).then((response) => {
                setIsloading(false)
               toast({
                   title: 'Property Added Successfully',
                   description: 'Propert was added successfully',
                   position:'top-right',
                   status: 'success',
                   duration: 3000
               })
               reset({
                   owner_name:   '',
                   house_number: '',
                   phone_number: '',
                   amount:       '',
                   arrears:      '',
                   town:         '',
                   street_name: '',
                   gps_address: '',
                   business_description: '',
               })
   
           }).catch((error) => {
               toast({
                   title: 'error.message',
                   description: error.message,
                   position:'top-right',
                   status: 'error',
                   duration: 3000
               })
                setIsloading(false)
           });
        }
        
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
                        <Input {...register("owner_name")} variant={'main'} borderColor={'brand.500'} required/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>House Number</FormLabel>
                        <Input {...register("house_number")} variant={'main'} borderColor={'brand.500'} required/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Telephone Number</FormLabel>
                        <Input {...register("phone_number")} variant={'main'} borderColor={'brand.500'} required/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Amount</FormLabel>
                        <Select variant={'main'} {...register("amount")} required>
                            <option value="">Select </option>
                            <option value="1">1-3 BEDROOMS</option>
                            <option value="2">4 BEDROOMS AND ABOVE</option>
                            <option value="3">ONE STOREY BUILDING (1-3 BEDROOMS)</option>
                            <option value="4">ONE STOREY BUILDING (4-6 BEDROOMS)</option>
                            <option value="5">TWO STOREY BUILDING (1-3 BEDROOMS)</option>
                            <option value="6">TWO STOREY BUILDING (4-6 BEDROOMS)</option>
                            <option value="7">THREE STOREY BUILDING</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Arrears</FormLabel>
                        <Input {...register("arrears")} variant={'main'} borderColor={'brand.500'} required/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Town</FormLabel>
                        <Select s variant={'main'} {...register("town")} required>
                            <option value="">Select </option>
                            <option value="1">KWAHU TAFO</option>
                            <option value="2">ABETIFI</option>
                            <option value="3">BOKURUWA</option>
                            <option value="4">ADUAMOA</option>
                            <option value="5">PEPEASE</option>
                            <option value="6">NKWATIA</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Street Name/Landmark</FormLabel>
                        <Input {...register("street_name")} variant={'main'} borderColor={'brand.500'} required/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>GPS Address</FormLabel>
                        <Input {...register("gps_address")} variant={'main'} borderColor={'brand.500'} required/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Business Description</FormLabel>
                        <Textarea {...register("business_description")} borderColor={'brand.500'} required/>
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