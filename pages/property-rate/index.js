import React from 'react'
import PageTitle from '~components/PageTitle'
import TableComponent from '~components/Table/tableComponent'
import { columnsDataComplex } from '~components/Table/variables/columnsData'
import PropertyAppLayout from '~layouts/PropertyAppLayout'

const data = []
const PropertyRateIndex = () => {
  return (
    <>
    <PageTitle title='Property Rate App'/>
    <PropertyAppLayout>
    <TableComponent
    tableName="Property Rates"
    buttonName="Add Property Rate"
    eventUrl={''}
     columnsData={columnsDataComplex} tableData={data} />
     </PropertyAppLayout>
     </>
  )
}

export default PropertyRateIndex