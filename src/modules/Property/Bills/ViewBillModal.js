import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { getAxios } from 'src/services/services.auth'
import useSWR from 'swr'
import PrintableBill from '~components/BillCardComponent/PrintableBill'

const ViewBillModal = ({customerDetails: customerId,isOpen,onClose}) => {
    const {data,error} = useSWR(`properties/${customerId}`,getAxios);

console.log(data?.data.attributes?.owner_name);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" >
        <ModalContent>
        {/* <ModalOverlay/> */}
            <ModalHeader>{`${data?.data.attributes?.owner_name}'s Bill`}</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
                <PrintableBill customerDetails={data?.data}/>
            </ModalBody>
            <ModalFooter>Print</ModalFooter>
        </ModalContent>
    </Modal>
  )
}

export default ViewBillModal