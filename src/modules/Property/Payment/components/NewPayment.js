import { Box, SimpleGrid, Text } from '@chakra-ui/react'
// import { Select } from '@mantine/core'
import React, { useEffect, useState } from 'react'
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
    const [customerId,setCustomerId] = useState('')

    console.log(data)

    const searchCustomer = (e)=>{
       const customer = e.value;
       setCustomerId(customer)
       console.log(customer)
    //    await getAxios(`properties/${customer}`).then((response) => {
    //     setCustomerData(response.data);
    //    }).catch((err) => {
    //     console.log(err)
    //    });
    //    setShowDetails(true)
    //     console.log(customerdata)
    }
    const Options = data?.data.map((item)=>(
        {label:item.attributes.owner_name, value:item.id}
    ));

    useEffect(() => {
             getAxios(`properties/${customerId}`).then((response) => {
             setCustomerData(response.data);
            }).catch((err) => {
             console.log(err)
            });
            setShowDetails(true)
             console.log("customer",customerdata)
         
    },[])

    return (
        <Card>
            <Box pb={10}>
                {/* <Searchbar width="200px"/> */}
                {/* <Select autoComplete searchable data={[
                    {value:'2',label:"Den"}
                ]}/> */}
                <Select isSearchable options={Options} isOptionSelected={(e)=> searchCustomer(e)}/>
            </Box>
            {showDetails && <MakePaymentComponent customerDetails={customerdata} />}
        </Card>
    )
}

export default NewPayment