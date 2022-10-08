import { Box, SimpleGrid, Text } from '@chakra-ui/react'
// import { Select } from '@mantine/core'
import React, { useState } from 'react'
import { getAxios } from 'src/services/services.auth'
import useSWR from 'swr'
import Card from '~components/Card/card'
import Searchbar from '~components/navbar/searchbar'
import { MakePaymentComponent } from '~modules/BOP/Payment/MakePaymentComponent'
import Select from 'react-select'

const NewPayment = () => {
     const { data, error } = useSWR(`properties`, getAxios);
    const[showDetails,setShowDetails] = useState(false)
    const [customerdata,setCustomerData] = useState([])

    console.log(data)

    const searchCustomer = (e)=>{
       const customer = e.value;
       console.log(customer)

       setShowDetails(true)

    }
    const Options = data?.data.map((item)=>(
        {label:item.attributes.owner_name, value:item.id}
    ));
    return (
        <Card>
            <Box pb={10}>
                {/* <Searchbar width="200px"/> */}
                {/* <Select autoComplete searchable data={[
                    {value:'2',label:"Den"}
                ]}/> */}
                <Select isSearchable options={Options} onChange={(e) => searchCustomer(e)}/>
            </Box>
            {showDetails && <MakePaymentComponent customerDetails={data?.data} />}
        </Card>
    )
}

export default NewPayment