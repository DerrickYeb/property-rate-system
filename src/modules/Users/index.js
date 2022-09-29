import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { NEW_USER_REGISTRATION_URL } from 'src/config/routes.config'
import { getAxios } from 'src/services/services.auth'
import Card from '~components/Card/card'
import { columnsDataComplex } from '~components/Table/variables/columnsData'

const data =
  [
    {
      "name": "Marketplace",
      "status": "Approved",
      "date": "24.Jan.2021",
      "progress": 75.5
    },
    {
      "name": "Marketplace",
      "status": "Disable",
      "date": "30.Dec.2021",
      "progress": 25.5
    },
    {
      "name": "Marketplace",
      "status": "Error",
      "date": "20.May.2021",
      "progress": 90
    },
    {
      "name": "Marketplace",
      "status": "Approved",
      "date": "12.Jul.2021",
      "progress": 50.5
    }
  ]



const Users = () => {
  const [fetchData, setData] = useState([])

  const dataFetch = async () => {
    await getAxios('users').then((users) => {
      setData(users);
    })
  }
  console.log(fetchData);

  useEffect(() => {
    dataFetch()
  }, [fetchData])

  return (
    // <TableComponent
    // tableName="Users"
    // buttonName="Add User"
    // eventUrl={NEW_USER_REGISTRATION_URL}
    //  columnsData={columnsDataComplex} tableData={fetchData} />
    <Card>
      <Link href={NEW_USER_REGISTRATION_URL} passHref>
        <Flex justifyContent={'flex-end'} py={4}>
        <Button variant={'brand'} width={'200px'} fontSize={12}>New User</Button>
          </Flex>
      </Link>
      <DataTable 
      title='Users'
      data={fetchData}
      columns={columnsDataComplex}
      pointerOnHover
      highlightOnHover
      pagination
      />
    </Card>
  )
}

export default Users