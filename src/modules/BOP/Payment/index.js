import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import DataTable from 'react-data-table-component'
import { BOP_PAYMENT_NEW_PAYMENT_URL } from 'src/config/routes.config'
import Card from '~components/Card/card'

const paymentColumn = [
  {
    name:"id",
    selector:"id",
  },
  {
    name:"amount",
    selector:"amount",
  },
  {
    name:"amount",
    selector:"amount",
  },
]

const Payment = () => {
  return (
   <Card>
    <Link href={BOP_PAYMENT_NEW_PAYMENT_URL} passHref>
        <Flex justifyContent={'flex-end'}>
        <Button variant={'brand'} width={'200px'} fontSize={12}>New Payment</Button>
          </Flex>
      </Link>
     <DataTable 
    data={[]}
    columns={paymentColumn}
    title='Payments'/>
   </Card>
  )
}

export default Payment

