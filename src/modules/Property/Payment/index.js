import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import DataTable from 'react-data-table-component'
import { PROPERTY_APP_PAYMENT_NEW_PAYMENT_URL } from 'src/config/routes.config'
import Card from '~components/Card/card'
import TableComponent from '~components/Table/tableComponent'
import { columnsDataCheck, columnsDataColumns } from '~components/Table/variables/columnsData'
import DataTableExtensions from "react-data-table-component-extensions";

const paymentColumn = [
  {
    name:"id",
    selector:"id",
  },
  {
    name:"Name",
    selector:"name",
  },
  {
    name:"Tel",
    selector:"phone_number",
  },
  {
    name:"Amount",
    selector:"amount",
  },
]

const Payment = () => {
  return (
    <Card>
      <Link href={PROPERTY_APP_PAYMENT_NEW_PAYMENT_URL} passHref>
        <Flex justifyContent={'flex-end'}>
        <Button variant={'brand'} width={'200px'} fontSize={12}>New Payment</Button>
          </Flex>
      </Link>
      <DataTableExtensions>
      <DataTable
    data={[]}
    columns={paymentColumn}
    title='Payments'/>
      </DataTableExtensions>
    </Card>
  )
}

export default Payment