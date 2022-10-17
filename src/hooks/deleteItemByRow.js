import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, IconButton, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsFillTrashFill } from 'react-icons/bs';
import { deleteAxios } from 'src/services/services.auth';

const DeleteItemByRow = (rowId) => {
    const toast = useToast();
    const modalOpen = useDisclosure()
    const cancelRef = React.useRef()
    const [isLoading,setIsLoading] = useState(false)
console.log("ad",rowId.rowId)
    const deleteUser = async() =>{
        setIsLoading(true)
        await deleteAxios(`users/${rowId.rowId}`).then((response)=>{
            setIsLoading(false)
            if(response){
                toast({
                    title:"User Deleted",
                    status: "success",
                    description:"User deleted successfully",
                    position:"top-right",
                    duration: 3000
                })
                modalOpen.onClose()
            }
            console.log(response)
        }).catch((error)=>{
            setIsLoading(false)
            toast({
                title:"User Deleted Failed",
                status: "error",
                description:"User deleted failed",
                position:"top-right",
                duration: 3000
            })
        })
    }
  return (
    <>
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

export default DeleteItemByRow