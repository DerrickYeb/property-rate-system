import React from 'react'
import TableComponent from '~components/Table/tableComponent'
import { columnsDataColumns } from '~components/Table/variables/columnsData'

const Payment = () => {
  return (
    <TableComponent 
    columnsData={columnsDataColumns} tableData={[]} tableName="Payments"/>
  )
}

export default Payment