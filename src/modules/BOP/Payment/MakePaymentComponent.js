import { Box, Button, FormControl, FormLabel, Input, SimpleGrid, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { postAxios } from 'src/services/services.auth';

export const MakePaymentComponent = ({ customerDetails }) => {
    const { register, handleSubmit } = useForm();
    const toast = useToast();
    const[disableButton,setDisableButton] = useState(true)

    const checkAmountStatus = (e) =>{
       if(e.target.value.length > 0){
            setDisableButton(false)
       }
       else{
        setDisableButton(true)
       }
    }

    const submitPayment = (data) => {
        const postData = {
            data: {
                property: customerDetails.id,
                payment_amount: data.payment_amount
            }
        };
        postAxios('payments', postData).then((res) => {
            toast({
                title: 'Payment.',
                description: "Payment successful",
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top'
            });
        }).catch((res) => {
            toast({
                title: "Error while adding payment",
                description: res.response.data.error.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top'
            });
        });
    };

    return (
        <Box>
            <form onSubmit={handleSubmit(submitPayment)}>
                <SimpleGrid columns={2} gap={10}>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input {...register('owner_name')} disabled={customerDetails ? true : false} value={customerDetails ? customerDetails.attributes?.owner_name : ''} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>House Number</FormLabel>
                        <Input {...register('house_number')} disabled={customerDetails ? true : false} value={customerDetails ? customerDetails.attributes?.house_number : ''} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Phone Number</FormLabel>
                        <Input {...register('phone_number')} disabled={customerDetails ? true : false} value={customerDetails ? customerDetails.attributes?.phone_number : ''} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Street Name</FormLabel>
                        <Input {...register('street_name')} disabled={customerDetails ? true : false} value={customerDetails ? customerDetails.attributes?.street_name : ''} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Town</FormLabel>
                        <Input {...register('town')} disabled={customerDetails ? true : false} value={customerDetails ? customerDetails.attributes?.town : ''} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Amount Paid</FormLabel>
                        <Input {...register('payment_amount',{onChange:(e) => checkAmountStatus(e)})} required />
                    </FormControl>
                </SimpleGrid>
                <Box py={8} display='flex' justifyContent='center'>
                    <Button w={'100%'} maxW="30%" isDisabled={disableButton} type='onSubmit' variant={'brand'}>Make Payment</Button>
                </Box>
            </form>
        </Box>
    );
};
