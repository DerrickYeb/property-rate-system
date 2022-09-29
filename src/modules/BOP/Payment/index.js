import React from 'react'
import TableComponent from '~components/Table/tableComponent'
import { columnsDataCheck, columnsDataColumns } from '~components/Table/variables/columnsData'

const Payment = () => {
  return (
    <TableComponent 
    columnsData={columnsDataCheck} tableData={[]} tableName="Payments"/>
  )
}

export default Payment