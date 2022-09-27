import React from 'react'
import { NEW_USER_REGISTRATION_URL } from 'src/config/routes.config'
import TableComponent from '~components/Table/tableComponent'
import { columnsDataComplex } from '~components/Table/variables/columnsData'

const data =
[
    {
      "name":"Marketplace",
      "status": "Approved",
      "date": "24.Jan.2021",
      "progress": 75.5  
    },
    {
      "name":"Marketplace",
      "status": "Disable",
      "date": "30.Dec.2021",
      "progress": 25.5  
    },
    {
      "name":"Marketplace",
      "status": "Error",
      "date": "20.May.2021",
      "progress": 90  
    },
    {
      "name":"Marketplace",
      "status": "Approved",
      "date": "12.Jul.2021",
      "progress": 50.5  
    }
  ]

const Users = () => {
    
  return (
    <TableComponent
    tableName="Users"
    buttonName="Add User"
    eventUrl={NEW_USER_REGISTRATION_URL}
     columnsData={columnsDataComplex} tableData={data} />
  )
}

export default Users