import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { PROPERTY_APP_PAYMENT_NEW_PAYMENT_URL } from 'src/config/routes.config'
import { getAxios } from 'src/services/services.auth'
import Card from '~components/Card/card'

const paymentColumn = [
  // {
  //   name:"id",
  //   selector:"id",
  // },
  {
    name:"Name",
    selector:(row)=>(
      row.attributes.property.data.attributes.owner_name
    ),
  },
  {
    name:"Tel", 
    selector:(row)=>(
      row.attributes.property.data.attributes.phone_number
    ),
  },
  {
    name:"Amount",
    selector:"attributes.payment_amount",
  },
]


const Payment = () => {
  const[dataFetch, setData] = useState([])
  const[propertyId,setPropertyId] = useState()

  const fetchData = () =>{
    getAxios('payments?populate=*').then((res)=>{
      setData(res.data)
    }).catch((err)=>{
      console.error(err)
    });
  }
  

  useEffect(() => {
    fetchData();
  },[])


  return (
    <Card>
      <Link href={PROPERTY_APP_PAYMENT_NEW_PAYMENT_URL} passHref>
        <Flex justifyContent={'flex-end'}>
        <Button variant={'brand'} width={'200px'} fontSize={12}>New Payment</Button>
          </Flex>
      </Link>
      <DataTable
    data={dataFetch}
    columns={paymentColumn}
    title='Payments'/>
    </Card>
  )
}

export default Payment