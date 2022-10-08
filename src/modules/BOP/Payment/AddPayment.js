import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { getAxios } from 'src/services/services.auth'
import useSWR from 'swr'
import { date } from 'yup/lib/locale'
import { MakePaymentComponent } from './MakePaymentComponent'

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
                    <MakePaymentComponent customerDetails={data?.data} />
                </ModalBody>
                {/* <ModalFooter>Print</ModalFooter> */}
            </ModalContent>
        </Modal>
    )
}

export default AddPayment


