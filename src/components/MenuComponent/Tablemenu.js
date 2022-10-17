import { ChevronDownIcon } from '@chakra-ui/icons'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, IconButton, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Portal, useDisclosure, useToast } from '@chakra-ui/react'
import { any } from 'prop-types'
import React, { useState } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { deleteAxios } from 'src/services/services.auth'
import AddPayment from '~modules/BOP/Payment/AddPayment'
import ViewBillModal from '~modules/Property/Bills/ViewBillModal'
import SmsModal from '~modules/Property/Sms/SmsModal'

const Tablemenu = ({ customerId }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [openSmsModal,setOpenSmsModal] = useState(false)
    const [openPaymentModal,setOpenPaymentModal] = useState(false)
    const toast = useToast();
    const modalOpen = useDisclosure()
    const cancelRef = React.useRef()
    const [isLoading,setIsLoading] = useState(false)


    const deleteUser = async() =>{
        setIsLoading(true)
        await deleteAxios(`properties/${customerId}`).then((response)=>{
            setIsLoading(false)
            if(response){
                toast({
                    title:"Property Deleted",
                    status: "success",
                    description:"Property deleted successfully",
                    position:"top-right",
                    duration: 3000
                })
                modalOpen.onClose()
            }
            console.log(response)
        }).catch((error)=>{
            setIsLoading(false)
            toast({
                title:"Property Deleted Failed",
                status: "error",
                description:"Property deleted failed",
                position:"top-right",
                duration: 3000
            })
        })
    }


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
                        <MenuItem>View</MenuItem>
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
        <IconButton
          colorScheme="red"
          variant="outline"
          onClick={modalOpen.onOpen}
          icon={<BsFillTrashFill />}
          aria-label="Delete"
        />
        <AlertDialog
        isOpen={modalOpen.isOpen}
        leastDestructiveRef={cancelRef}
        onClose={modalOpen.onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Property
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can&apos;t undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={modalOpen.onClose}>
                Cancel
              </Button>
              <Button isLoading={isLoading} colorScheme='red' onClick={deleteUser} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
        </>
    )
}

export default Tablemenu