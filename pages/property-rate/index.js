import React from 'react'
import { NEW_PROPERTY_RATE_URL } from 'src/config/api.routes.config'
import { PROPERTY_RATE_ADD_NEW } from 'src/config/routes.config'
import PageTitle from '~components/PageTitle'
import TableComponent from '~components/Table/tableComponent'
import { columnsDataComplex } from '~components/Table/variables/columnsData'
import PropertyAppLayout from '~layouts/PropertyAppLayout'
import PropertyIndex from '~modules/Property'

const data = []
const PropertyRateIndex = () => {
  return (
    <>
    <PageTitle title='Property Rate App'/>
    <PropertyAppLayout>
    <PropertyIndex/>
     </PropertyAppLayout>
     </>
  )
}

export default PropertyRateIndex