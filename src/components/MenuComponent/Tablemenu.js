import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Portal, useDisclosure } from '@chakra-ui/react'
import { any } from 'prop-types'
import React, { useState } from 'react'
import AddPayment from '~modules/BOP/Payment/AddPayment'
import ViewBillModal from '~modules/Property/Bills/ViewBillModal'
import SmsModal from '~modules/Property/Sms/SmsModal'

const Tablemenu = ({ customerId }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [openSmsModal,setOpenSmsModal] = useState(false)
    const [openPaymentModal,setOpenPaymentModal] = useState(false)


    const handleSmsOpenModal = () => setOpenSmsModal(!openSmsModal)
    const handlePaymentCloseModal = () => setOpenPaymentModal(!openPaymentModal)

    console.log('Tablemenu', customerId)
    return (
        <>
        <Menu fontSize={12} color="#fff" height={5} w={100} preventOverflow bg={'brand.500'}>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Actions
            </MenuButton>
            <Portal>
                <MenuList>
                    <MenuGroup title='Profile'>
                        <MenuItem>Account</MenuItem>
                        <MenuItem onClick={onOpen}>Bill</MenuItem>
                        <MenuItem onClick={handleSmsOpenModal}>Send SMS</MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title='Payment'>
                        <MenuItem onClick={handlePaymentCloseModal}>Add Payment</MenuItem>
                        <MenuItem>Payments History</MenuItem>
                    </MenuGroup>
                </MenuList>
            </Portal>
        </Menu >
        <ViewBillModal customerDetails={customerId} isOpen={isOpen} onClose={onClose}/>
        <SmsModal customerDetails={customerId} isOpen={openSmsModal} onClose={() => setOpenSmsModal(false)}/>
        <AddPayment data={customerId} isOpen={openPaymentModal} onClose={()=>setOpenPaymentModal(false)}/>
        </>
    )
}

export default Tablemenu