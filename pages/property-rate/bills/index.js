import React from 'react'
import BillRoutes from 'src/AppRoutes/PropertyRate/BillRoutes'
import PageTitle from '~components/PageTitle'
import PropertyAppLayout from '~layouts/PropertyAppLayout'
import Bills from '~modules/Property/Bills'

const BillsIndex = () => {
  return (
    <>
    <PageTitle title="Property Rate App - Bills"/>
    <PropertyAppLayout>
      <Bills/>
    </PropertyAppLayout>
    </>
  )
}

export default BillsIndex