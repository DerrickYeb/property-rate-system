import { Box, Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, SimpleGrid, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { getAxios, postAxios } from 'src/services/services.auth'
import useSWR from 'swr'
import { date } from 'yup/lib/locale'

const AddPayment = ({ isOpen, onClose, data: customerId }) => {
    const { data, error } = useSWR(`properties/${customerId}`, getAxios);
    const [dateTime, setDateTime] = useState();
    const date = new Date()

    useEffect(() => {
        setDateTime(date.toDateString()); //
    }, [date])

    return (
        <Modal isCentered closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} size="4xl" >
            <ModalContent>
                {/* <ModalOverlay/> */}
                <ModalHeader>{`Payment by ${data?.data.attributes?.owner_name} on ${dateTime}`}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <MakePaymentComponent customerDetails={data.data} />
                </ModalBody>
                {/* <ModalFooter>Print</ModalFooter> */}
            </ModalContent>
        </Modal>
    )
}

export default AddPayment

const MakePaymentComponent = ({ customerDetails }) => {
    const { register, handleSubmit } = useForm();
    const toast = useToast();


    const submitPayment = (data) => {
        const postData = {
            data: {
                property: customerDetails.id,
                payment_amount: data.payment_amount
            }
        }
        postAxios('payments', postData).then((res) => {
            toast({
                title: 'Payment.',
                description: "Payment successful",
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top',
              })
        }).catch((res) => {
            toast({
                title:"Error while adding payment",
                description:res.response.data.error.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top',
              })
        });
    }

    return (
        <Box>
            <form onSubmit={handleSubmit(submitPayment)}>
                <SimpleGrid columns={2} gap={10}>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input {...register('owner_name')} disabled={customerDetails ? true : false} value={customerDetails ? customerDetails.attributes.owner_name : ''} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>House Number</FormLabel>
                        <Input {...register('house_number')} disabled={customerDetails ? true : false} value={customerDetails ? customerDetails.attributes.house_number : ''} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Phone Number</FormLabel>
                        <Input {...register('phone_number')} disabled={customerDetails ? true : false} value={customerDetails ? customerDetails.attributes.phone_number : ''} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Street Name</FormLabel>
                        <Input {...register('street_name')} disabled={customerDetails ? true : false} value={customerDetails ? customerDetails.attributes.street_name : ''} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Town</FormLabel>
                        <Input {...register('town')} disabled={customerDetails ? true : false} value={customerDetails ? customerDetails.attributes.town : ''} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Amount Paid</FormLabel>
                        <Input {...register('payment_amount')} required/>
                    </FormControl>
                </SimpleGrid>
                <Box py={8} display='flex' justifyContent='center'>
                    <Button w={'100%'} maxW="30%" type='onSubmit' variant={'brand'}>Make Payment</Button>
                </Box>
            </form>
        </Box>
    )
}