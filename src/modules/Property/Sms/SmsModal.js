import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from '@chakra-ui/react';
import React from 'react'
import { getAxios } from 'src/services/services.auth';
import useSWR from 'swr';
import SingleSMS from '~modules/BOP/Sms/components/singleSms';

const SmsModal = ({isOpen,onClose,customerDetails: customerId}) => {
    const {data,error} = useSWR(`properties/${customerId}`,getAxios);

    // console.log(data.data.attributes?.owner_name);
    
      return (
        <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} size="4xl" >
            <ModalContent>
            {/* <ModalOverlay/> */}
                <ModalHeader>{`${data?.data.attributes?.owner_name}`}</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <SingleSMS/>
                </ModalBody>
                <ModalFooter>Print</ModalFooter>
            </ModalContent>
        </Modal>
      )
}

export default SmsModal