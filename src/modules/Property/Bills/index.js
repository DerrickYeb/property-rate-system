import React from 'react'
import TableComponent from '~components/Table/tableComponent'
import { columnsDataColumns } from '~components/Table/variables/columnsData'

const Bills = () => {
  return (
    <TableComponent 
    columnsData={columnsDataColumns} tableData={[]} tableName="Bills"/>
  )
}

export default Bills